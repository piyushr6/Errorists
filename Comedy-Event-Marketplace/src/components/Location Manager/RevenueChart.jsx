import React from 'react';
import { DollarSign, TrendingUp, Users } from 'lucide-react';

function RevenueChart() {
   const stats = [
      {
         name: 'Total Revenue',
         value: '₹1,20,000',
         icon: DollarSign,
         change: '+12.5%',
         changeType: 'positive'
      },
      {
         name: 'Total Bookings',
         value: '245',
         icon: Users,
         change: '+18.2%',
         changeType: 'positive'
      },
      {
         name: 'Average Show Revenue',
         value: '₹15,000',
         icon: TrendingUp,
         change: '+4.1%',
         changeType: 'positive'
      }
   ];

   return (
      <div className="bg-white rounded-lg shadow p-6">
         <h2 className="text-lg font-semibold mb-6">Revenue Overview</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
               <div key={stat.name} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                     <div>
                        <p className="text-sm text-gray-600">{stat.name}</p>
                        <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                     </div>
                     <div className={`p-2 rounded-full ${stat.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'}`}>
                        <stat.icon className={`w-5 h-5 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`} />
                     </div>
                  </div>
                  <div className="mt-4">
                     <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                     </span>
                     <span className="text-sm text-gray-600"> vs last month</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default RevenueChart;