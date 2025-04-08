"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnnouncementBanner from "../../components/AnnouncementBanner";

export default function RecentActivitiesPage() {
  const mockActivities = [
    {
      type: "Book",
      title: "The Rise of AI in Healthcare",
      timestamp: "April 6, 2025, 3:15 PM",
      action: "Viewed book details"
    },
    {
      type: "Article",
      title: "Ethics of Artificial Intelligence",
      timestamp: "April 6, 2025, 2:42 PM",
      action: "Opened article preview"
    },
    {
      type: "Search",
      title: "machine learning healthcare",
      timestamp: "April 6, 2025, 2:20 PM",
      action: "Searched library catalog"
    },
    {
      type: "E-Book",
      title: "Machine Learning Basics",
      timestamp: "April 5, 2025, 6:03 PM",
      action: "Opened e-book viewer"
    },
    {
      type: "Database",
      title: "JSTOR - AI and Society",
      timestamp: "April 5, 2025, 4:10 PM",
      action: "Accessed database entry"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AnnouncementBanner
        message="Extended hours during finals week: Open until midnight December 10-16."
        link="/hours"
        linkText="View schedule"
      />
      <Header />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#13294B] mb-8 text-center">Recent Activities & Search History</h1>

          <div className="space-y-4">
            {mockActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-[#9A8A62]">{activity.type}</span>
                  <span className="text-xs text-gray-400">{activity.timestamp}</span>
                </div>
                <h2 className="text-lg font-medium text-[#13294B]">{activity.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
