import { SectionWrapper } from "../wrapper"
import { socialLinks } from "../info"

const Footer = () => {
  return (
    <div
      className="text-center text-white text-[18px]"
    >
      <ul className="flex gap-10">
        {socialLinks.map((link)=>(
          <li key={link.name}
            className="flex justify-center mt-8"
          >
            <a href={link.url} target="_blank" rel="noreferrer">
              <i className={`${link.icon} text-white text-[24px]`}></i>
            </a>
          </li>
          ))  
        }
      </ul>
      <p className="mt-10">Made with Love ❤️‍🔥
        <span className="text-yellow-300">Davis Muchiri</span>
      </p>
    </div>
  )
}

export default SectionWrapper(Footer,"footer")
