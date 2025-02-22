import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

const AdminAnalytics = () => {
  const [analyticsData] = useState({
    userEngagement: {
      topArtists: [
        { name: "John Comedy", shows: 25 },
        { name: "Jane Standup", shows: 20 },
        { name: "Funny Mike", shows: 18 },
      ],
      topVenues: [
        { name: "Laugh Lounge", bookings: 150 },
        { name: "Comedy Club", bookings: 120 },
      ],
      topShows: [
        { name: "Friday Night Laughs", tickets: 500 },
        { name: "Comedy Special", tickets: 450 },
      ],
    },
    salesReports: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      sales: [5000, 7000, 6500, 8000, 9000, 9500],
    },
    platformGrowth: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      registrations: [100, 120, 140, 180, 200, 220],
      activeUsers: [300, 350, 400, 450, 500, 550],
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics & Reporting</h2>

      {/* User Engagement Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Top Artists</h3>
          <ul className="space-y-2">
            {analyticsData.userEngagement.topArtists.map((artist, index) => (
              <li key={index} className="flex justify-between">
                <span>{artist.name}</span>
                <span>{artist.shows} Shows</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Top Venues</h3>
          <ul className="space-y-2">
            {analyticsData.userEngagement.topVenues.map((venue, index) => (
              <li key={index} className="flex justify-between">
                <span>{venue.name}</span>
                <span>{venue.bookings} Bookings</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Top Shows</h3>
          <ul className="space-y-2">
            {analyticsData.userEngagement.topShows.map((show, index) => (
              <li key={index} className="flex justify-between">
                <span>{show.name}</span>
                <span>{show.tickets} Tickets</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sales Reports */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-4">Sales Reports</h3>
        <Bar
          data={{
            labels: analyticsData.salesReports.labels,
            datasets: [
              {
                label: "Ticket Sales ($)",
                data: analyticsData.salesReports.sales,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
            ],
          }}
        />
      </div>

      {/* Platform Growth Analytics */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-4">
          Platform Growth Analytics
        </h3>
        <Line
          data={{
            labels: analyticsData.platformGrowth.labels,
            datasets: [
              {
                label: "New Registrations",
                data: analyticsData.platformGrowth.registrations,
                borderColor: "rgba(54, 162, 235, 1)",
                fill: false,
              },
              {
                label: "Active Users",
                data: analyticsData.platformGrowth.activeUsers,
                borderColor: "rgba(255, 99, 132, 1)",
                fill: false,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default AdminAnalytics;
