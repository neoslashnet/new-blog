import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Below are highlights of projects I am working on and completed last year
          </p>
        </div> 
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          <b><font size="+2"> What I am currently working on </font></b>
          <ul>
  <li>Citrix Cloud (Managed) VDI in AWS Cloud</li>
  <li>AWS Organizations rollout</li>
  <li>SharePoint Online migration off a Windows File Server</li>
  <li>AWS Transit Gateway deployments</li>
  <li>Fortinet firewall- Transition off older Cisco ASA. Includes deployment of over 200 IPSEC L2L VPN's</li>
  <li>AWS Route 53 VPC endpoint and resolver configuration</li>
  <li>Developing AWS Partnership for my company</li>
  <li>Hybrid Exchange configuration</li>
  </ul>
  </p>
 <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
   <b><font size="+2">2020 Completed Projects </font></b>
  <ul>
  <li>Office 365 email migration off Exchange 2010</li>
  <li>Implemented AWS File gateway to S3 storage</li>
  <li>Azure Sentinel configuration and deployment</li>
  <li>AWS S3 Replication Projects </li>
  <li>Cisco core and access layer switch upgrade + Inter VLAN Routing</li>
  <li>VMWare implementations (Upgrade from XenServer)</li>
  <li>Citrix VDA upgrades</li>
  <li>Multiple Fortinet deployments</li>
  <li>Multiple Office 365 cutovers and migrations</li>
  <li>Implemented MFA across severall applications to entire client staff</li>
  </ul> 
        </p>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
