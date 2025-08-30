'use client';
import Image from 'next/image';
import future_banner from '../../../../public/images/every-city.jpg';
import future_mobile_banner from '../../../../public/images/All-Cities.png';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
  CentralCard,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
} from './constants';

const ServiceCity = () => {
  const isMobile = useIsMobile();

  // Split details into two parts for each card
  const splitDetails = (details: string) => {
    const midIndex = Math.ceil(details.length / 2);
    return [details.slice(0, midIndex), details.slice(midIndex)];
  };

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>
        <CardContainer>
          {/* Top-left Card */}
          <Card className="left top">
            <TextCtn>
              <MaskText phrases={new Array(cardsInfo[0].title)} tag="h3" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[0].details)[0])} tag="p" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[0].details)[1])} tag="p" />
            </TextCtn>
            <SVGCtn>
              <Image src={cardsInfo[0].icon} alt={cardsInfo[0].title} />
            </SVGCtn>
          </Card>
          {/* Left-bottom Card */}
          <Card className="left bottom">
            <TextCtn>
              <MaskText phrases={new Array(cardsInfo[2].title)} tag="h3" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[2].details)[0])} tag="p" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[2].details)[1])} tag="p" />
            </TextCtn>
            <SVGCtn>
              <Image src={cardsInfo[2].icon} alt={cardsInfo[2].title} />
            </SVGCtn>
          </Card>
          {/* Right-top Card */}
          <Card className="right top">
            <TextCtn>
              <MaskText phrases={new Array(cardsInfo[1].title)} tag="h3" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[1].details)[0])} tag="p" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[1].details)[1])} tag="p" />
            </TextCtn>
            <SVGCtn>
              <Image src={cardsInfo[1].icon} alt={cardsInfo[1].title} />
            </SVGCtn>
          </Card>
          {/* Right-bottom Card */}
          <Card className="right bottom">
            <TextCtn>
              <MaskText phrases={new Array(cardsInfo[3].title)} tag="h3" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[3].details)[0])} tag="p" />
              <MaskText phrases={new Array(splitDetails(cardsInfo[3].details)[1])} tag="p" />
            </TextCtn>
            <SVGCtn>
              <Image src={cardsInfo[3].icon} alt={cardsInfo[3].title} />
            </SVGCtn>
          </Card>
          {/* Central Image Card */}
          <CentralCard>
            <Image src="/images/central_person.jpeg" alt="Professional portrait" fill style={{ objectFit: 'cover' }} />
          </CentralCard>
        </CardContainer>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image src={future_banner} alt="future_banner" fill />
        )}
      </Banner>
    </Wrapper>
  );
};

export default ServiceCity;