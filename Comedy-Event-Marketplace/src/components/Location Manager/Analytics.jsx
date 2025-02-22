import React from 'react';
import { Calendar, Star, Clock, Users } from 'lucide-react';

function Analytics() {
   const metrics = [
      {
         title: 'Upcoming Shows',
         value: '24',
         change: '+8%',
         icon: Calendar,
      },
      {
         title: 'Average Rating',
         value: '4.8',
         change: '+0.3',
         icon: Star,
      },
      {
         title: 'Show Duration',
         value: '2.5h',
         change: 'avg',
         icon: Clock,
      },
      {
         title: 'Total Audience',
         value: '12.5K',
         change: '+15%',
         icon: Users,
      }
   ];

   return (
      <div className="bg-white rounded-lg shadow p-6">
         <h2 className="text-lg font-semibold mb-6">Performance Analytics</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
               <div key={metric.title} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                     <div className="p-2 bg-indigo-100 rounded-full">
                        <metric.icon className="w-5 h-5 text-indigo-600" />
                     </div>
                     <div>
                        <p className="text-sm text-gray-600">{metric.title}</p>
                        <div className="flex items-baseline">
                           <p className="text-2xl font-semibold">{metric.value}</p>
                           <span className="ml-2 text-sm text-green-600">{metric.change}</span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Analytics;  