import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Nutrition",
    title: "The Optimal Post-Workout Nutrition Window: Science vs. Myth",
    excerpt: "You've heard it before — eat within 30 minutes or lose your gains. But what does the latest research actually say? We break down the evidence.",
    author: "Kavindi Jayawardena",
    date: "Apr 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    featured: true,
  },
  {
    category: "Training",
    title: "Why Periodization Is the Most Underrated Programming Concept",
    excerpt: "Going hard every session isn't how elite athletes train. Here's how periodized programming builds long-term strength without burnout.",
    author: "Dinesh Rajapaksa",
    date: "Apr 22, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    featured: false,
  },
  {
    category: "Recovery",
    title: "Cold Exposure, Saunas, and Sleep: The Recovery Trifecta",
    excerpt: "Modern recovery isn't just rest — it's a system. Discover how the world's best athletes are leveraging thermal stress protocols for accelerated gains.",
    author: "Nimali Silva",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    featured: false,
  },
  {
    category: "Mindset",
    title: "Building an Unbreakable Training Mindset: Lessons from Combat Sports",
    excerpt: "What boxing teaches us about embracing discomfort, staying consistent, and developing the psychological edge that separates good from elite.",
    author: "Roshan Thilakaratne",
    date: "Apr 8, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    featured: false,
  },
];

const categoryColor: Record<string, string> = {
  Nutrition: "text-green-400 bg-green-900/30 border-green-800/40",
  Training: "text-apex-red bg-apex-red/10 border-apex-red/30",
  Recovery: "text-blue-400 bg-blue-900/30 border-blue-800/40",
  Mindset: "text-yellow-400 bg-yellow-900/30 border-yellow-800/40",
};

export default function Blog() {
  const featured = posts.find((p) => p.featured)!;
  const regular = posts.filter((p) => !p.featured);

  return (
    <section id="blog" className="py-28 bg-apex-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Knowledge Hub</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide">
              APEX<br /><span className="text-apex-red">INSIGHTS</span>
            </h2>
          </div>
          <a
            href="#"
            className="font-condensed font-700 text-sm tracking-widest uppercase text-apex-red hover:text-white border border-apex-red hover:bg-apex-red px-6 py-3 transition-all duration-200 self-start md:self-auto"
          >
            View All Articles
          </a>
        </div>

        {/* Featured + grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured post */}
          <div className="group relative overflow-hidden cursor-pointer card-lift row-span-2 lg:row-span-1 lg:col-span-1">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-apex-black via-apex-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-mono text-xs px-2.5 py-0.5 border ${categoryColor[featured.category]} rounded-none`}>
                  {featured.category}
                </span>
                <span className="font-mono text-xs text-apex-gray-muted flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-wide text-white mb-3 group-hover:text-apex-red transition-colors leading-tight">
                {featured.title}
              </h3>
              <p className="font-body text-sm text-apex-white-dim leading-relaxed mb-4 line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-condensed font-600 text-xs text-apex-white tracking-wider">{featured.author}</p>
                  <p className="font-mono text-xs text-apex-gray-muted">{featured.date}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-apex-red group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Regular posts */}
          <div className="flex flex-col gap-6">
            {regular.map((post) => (
              <div key={post.title} className="group flex gap-5 bg-apex-black-4 border border-apex-gray/20 hover:border-apex-red/40 p-5 cursor-pointer transition-all duration-200 card-lift">
                <div className="w-28 h-24 shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`font-mono text-[10px] px-2 py-0.5 border ${categoryColor[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] text-apex-gray-muted">{post.readTime}</span>
                  </div>
                  <h3 className="font-condensed font-700 text-sm tracking-wide text-apex-white group-hover:text-apex-red transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="font-mono text-[10px] text-apex-gray-muted tracking-wider">
                    {post.author} · {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
