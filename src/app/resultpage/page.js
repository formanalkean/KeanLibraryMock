import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import AnnouncementBanner from '../../components/AnnouncementBanner';

function ResultCard({ title, author, type, description, link, date, tags, source }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-[#13294B]">{title}</h3>
        <span className="text-sm bg-[#9A8A62] text-white px-3 py-1 rounded-full">{type}</span>
      </div>
      <p className="text-sm text-gray-600 mb-1">By {author}</p>
      <p className="text-sm text-gray-500 mb-1">Published: {date}</p>
      <p className="text-sm text-gray-500 mb-2">Source: {source}</p>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <a href={link} className="text-[#13294B] font-medium hover:text-[#9A8A62]">View Details</a>
    </div>
  );
}

export default function SearchResultsPage() {
  const results = [
    {
      title: "Understanding AI",
      author: "John Smith",
      type: "Book",
      description: "An introductory guide to artificial intelligence concepts and applications.",
      link: "/books/understanding-ai",
      date: "2021",
      tags: ["AI", "Technology", "Intro"],
      source: "Kean Catalog"
    },
    {
      title: "AI in Education",
      author: "Jane Doe",
      type: "Article",
      description: "A scholarly article on how AI is shaping modern education systems.",
      link: "/articles/ai-education",
      date: "2023",
      tags: ["AI", "Education", "Future"],
      source: "JSTOR"
    },
    {
      title: "Machine Learning Basics",
      author: "Dr. Alan Turing",
      type: "E-Book",
      description: "This book explains the fundamental principles behind machine learning.",
      link: "/ebooks/ml-basics",
      date: "2020",
      tags: ["ML", "Data Science", "Beginner"],
      source: "Kean E-Books"
    },
    {
      title: "Ethics of Artificial Intelligence",
      author: "Clara Bates",
      type: "Article",
      description: "Explores the ethical concerns and responsibilities surrounding AI development.",
      link: "/articles/ai-ethics",
      date: "2022",
      tags: ["Ethics", "AI", "Philosophy"],
      source: "ScienceDirect"
    },
    {
      title: "The Rise of AI in Healthcare",
      author: "Dr. Lisa Grey",
      type: "Book",
      description: "A comprehensive look at how AI is transforming healthcare and medicine.",
      link: "/books/ai-healthcare",
      date: "2024",
      tags: ["AI", "Healthcare", "Innovation"],
      source: "Kean Library"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner
        message="Extended hours during finals week: Open until midnight December 10-16."
        link="/hours"
        linkText="View schedule"
      />
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#13294B] mb-6 text-center">Search Kean Library Resources</h1>
          
          <div className="mb-10">
            <SearchBox />
            <div className="flex justify-center mt-6">
              <a
                href="/recent-activities"
                className="inline-block bg-[#13294B] text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#0A1A38] transition"
              >
                Recent Activities
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item, index) => (
              <ResultCard key={index} {...item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
