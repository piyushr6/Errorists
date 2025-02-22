import { create } from 'zustand';
import { supabase } from '../lib/supabase';

const useAuthStore = create((set) => ({
  user: null,
  profile: null,
  loading: true,
  signIn: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      // Fetch profile after successful sign in
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      set({ user: data.user, profile });
      return data;
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  },
  signUp: async (email, password, role) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (authError) throw authError;

      // Create profile with role
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: authData.user.id, role, email }])
        .select()
        .single();

      if (profileError) throw profileError;
      
      set({ user: authData.user, profile });
      return authData;
    } catch (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, profile: null });
    } catch (error) {
      console.error('Error signing out:', error.message);
      throw error;
    }
  },
  loadUser: async () => {
    try {
      set({ loading: true });
      
      // First check the session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      // If no session, set loading to false and return
      if (!session) {
        set({ user: null, profile: null, loading: false });
        return;
      }

      // If we have a session, get the user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;

      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (profileError) throw profileError;
        set({ user, profile, loading: false });
      } else {
        set({ user: null, profile: null, loading: false });
      }
    } catch (error) {
      console.error('Error loading user:', error.message);
      set({ user: null, profile: null, loading: false });
    }
  },
}));

export default useAuthStore;