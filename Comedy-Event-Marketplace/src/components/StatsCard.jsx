import React from 'react'


import { 
    
    TrendingUp,
    
  } from 'lucide-react';


const StatsCard = ({icon,label,value,trend}) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl text-indigo-600">
              {icon}
            </div>
            {trend && (
              <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                <TrendingUp size={14} />
                <span className="text-sm font-medium">+{trend}%</span>
              </div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className="text-gray-500 mt-1">{label}</p>
        </div>
      );
}

export default StatsCard

