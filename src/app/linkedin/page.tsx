"use client";

import Image from 'next/image';
import { FC } from 'react';

const LinkedInPage: FC = () => {
  const feedView = "Most relevant first";
  const embeddedPosts = [
    {
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7289609254552907776",
      height: 1516
    },
    {
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7162827111345348609",
      height: 834
    }
  ];


  return (
    <div className="max-w-[1128px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6">
        {/* Left Sidebar */}
        <div className="hidden md:block md:col-span-3">
          <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
            {/* Profile Summary */}
            <div className="relative">
              <div className="h-14">
                <Image
                  src="/banner.jpeg"
                  alt="Profile Banner"
                  width={500}
                  height={56}
                  className="w-full h-14 object-cover"
                />
              </div>
              <div className="px-4 pb-4">
                <div className="-mt-8 mb-3 text-center">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile"
                    width={72}
                    height={72}
                    className="rounded-full border-2 border-white inline-block"
                  />
                </div>
                <h2 className="text-center font-semibold mb-0.5 hover:underline cursor-pointer">
                  Munendra Kushwaha
                </h2>
                <p className="text-center text-sm text-gray-600">
                  Software Engineer @Successive Technologies || MERN Developer
                </p>
                <div className="mt-3 pt-3 border-t space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500">Followers</p>
                      <span className="text-blue-600 font-semibold">1700</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500">Connections</p>
                      <span className="text-blue-600 font-semibold">500+</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">
                      <span className="material-icons text-[16px] align-bottom">location_on</span>
                      Noida, Uttar Pradesh, India
                    </p>
                  </div>
                  <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                    <p>Show all activity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Network Management Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <h2 className="font-semibold mb-3">Manage my network</h2>
              <div className="space-y-4">
                <NetworkItem label="Connections" count={1700} />
                <NetworkItem label="Contacts" count={653} />
                <NetworkItem label="Following & followers" />
                <NetworkItem label="Groups" count={17} />
                <NetworkItem label="Events" count={7} />
                <NetworkItem label="Pages" count={109} />
                <NetworkItem label="Newsletters" count={35} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="col-span-1 md:col-span-6">
          {/* Create Post */}
          <div className="bg-white rounded-lg shadow mb-4 p-4">
            <div className="flex gap-2">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <button className="flex-1 text-left px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-500">
                Start a post
              </button>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <PostButton icon="media" label="Media" />
              <PostButton icon="job" label="Job" />
              <PostButton icon="article" label="Write article" />
            </div>
          </div>

          {/* Posts Feed */}
          <div className="flex items-center gap-2 mb-4">
            <div className="border-t flex-1"></div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Sort by:</span>
              <button className="font-semibold hover:text-blue-600 hover:underline">
                {feedView}
              </button>
            </div>
          </div>

          {/* Posts */}
          {embeddedPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4">
              <iframe 
                src={post.src}
                height={post.height}
                width="504"
                frameBorder="0"
                allowFullScreen
                title={`Embedded post ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block md:col-span-3">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold mb-4">Trending Now</h2>
            <div className="space-y-4">
              <NewsItem
                title="RBI's first rate cut in 5 years"
                time="3d ago"
                readers="186,129"
              />
              <NewsItem
                title="Nissan eyes new partner for merger"
                time="12h ago"
                readers="11,647"
              />
              <NewsItem
                title="Rural demand boosts FMCG growth"
                time="10h ago"
                readers=""
              />
              <NewsItem
                title="Indians top H-1B visa list"
                time="10h ago"
                readers=""
              />
              <NewsItem
                title="Real estate faces approval delays"
                time="9h ago"
                readers=""
              />
              <NewsItem
                title="Mutual funds emerge as M&A savior"
                time="10h ago"
                readers=""
              />
              <NewsItem
                title="Hotels cash in on religious tourism"
                time="10h ago"
                readers=""
              />
              <NewsItem
                title="Fastest-growing jobs in Indian cities"
                time="6d ago"
                readers="62,031"
              />
              <NewsItem
                title="Cognizant reports revenue uptick"
                time="4d ago"
                readers="49,937"
              />
              <NewsItem
                title="GCCs to drive jobs growth"
                time="3d ago"
                readers="3,118"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function PostButton({ icon, label }: { icon: string; label: string }) {
  const iconMap: { [key: string]: string } = {
    media: 'photo_size_select_actual',
    job: 'business_center',
    article: 'article',
  };

  const iconColorMap: { [key: string]: string } = {
    media: 'text-[#378fe9]',
    job: 'text-[#a872e8]',
    article: 'text-[#e16745]',
  };

  return (
    <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
      <span className={`material-icons ${iconColorMap[icon]}`}>{iconMap[icon]}</span>
      <span className="text-gray-600">{label}</span>
    </button>
  );
}

function NewsItem({ title, time, readers }: { title: string; time: string; readers: string }) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{time} • {readers} readers</p>
    </div>
  );
}

function NetworkItem({ label, count }: { label: string; count?: number }) {
  return (
    <div className="flex items-center justify-between hover:bg-gray-100 cursor-pointer -mx-4 px-4 py-1">
      <div className="flex items-center gap-2">
        <span className="material-icons text-gray-600 text-xl">
          {label.toLowerCase() === 'connections' ? 'people' : 
           label.toLowerCase() === 'contacts' ? 'contact_page' :
           label.toLowerCase() === 'following & followers' ? 'person' :
           label.toLowerCase() === 'groups' ? 'group' :
           label.toLowerCase() === 'events' ? 'event' :
           label.toLowerCase() === 'pages' ? 'article' : 'mail'}
        </span>
        <span className="text-gray-600">{label}</span>
      </div>
      {count !== undefined && (
        <span className="text-gray-600">{count}</span>
      )}
    </div>
  );
}

export default LinkedInPage;
