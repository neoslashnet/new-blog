import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Senior IT Systems Engineer</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />                          
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hello there!
              My name name is David Galiata. I began working in IT 2006 and have held various roles. I started off my career with break/fix hardware repairs. I've also worked in a NOC, corporate IT, and ultimately landed in the consulting industry.
            </p>
            <p>
            My technical background is in server infrastructure (Windows & Linux), network infrastructure, firewalls/security, storage, virtualization, and recently cloud services. I apply all these skills sets in my current role as a Senior IT Systems Engineer for a consulting firm in the San Francisco Bay Area
            </p>
            <p>
            I started this blog to document certain aspects of projects and random issues I deal with not only for myself but to help others. If you see something technical in my blog, it’s because I’m actively working with that technology. Lately I’ve been blogging about other aspects of the IT industry.
            </p>
            <p>In addition to my technical interests, I enjoy spending time with my family, coaching soccer, playing chess, and reading.
            </p>
            <p>If you want to contact me or know more about what I’m working on you can follow me on Twitter.</p>
            <p>Thank You for reading!</p>
          </div>
        </div>
      </div>
    </>
  )
}
