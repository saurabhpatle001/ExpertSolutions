import Image from 'next/image';
import Link from 'next/link';           // ← Important
import logo2 from '../../../../public/images/logo2.png';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'About Us',
    links: ['Our Company', 'Careers', 'Press Kits'],
  },
  {
    title: 'Legal',
    links: ['Terms of Use', 'Privacy Policy', 'Cookie Policy'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'FAQ'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={logo2} alt="Expert Solutions Logo" />
        </FooterLogo>

        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation>
              {linksArr.map((section, i) => (
                <GridColumn key={i}>
                  <h3>{section.title}</h3>
                  <LinksContainer>
                    {section.links.map((link, index) => {
                      if (link === 'Privacy Policy') {
                        return (
                          <li key={index}>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                          </li>
                        );
                      }
                      return <li key={index}>{link}</li>;
                    })}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>

          <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="chevron" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright" />
              © {new Date().getFullYear()} Expert Solutions
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;