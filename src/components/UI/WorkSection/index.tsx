'use client';
import Image from 'next/image';

import {
  Wrapper,
  Inner,
  Header,
  Offers,
  FirstRowFirstCard,
  FirstRowSecondCard,
  SecondRowFirstCard,
  SecondRowSecondCard,
  SecondRowThirdCard,
  ThirdRowFirstCard,
  ImageCtn,
} from './styles';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';

const OffersSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Header />
        <Offers>
          <FirstRowFirstCard flexSize={2}>
            <ImageCtn>
              <Image src={offers[0].illustration} alt={offers[0].title} />
            </ImageCtn>
          </FirstRowFirstCard>
          <FirstRowSecondCard flexSize={1}>
            <ImageCtn>
              <Image src={offers[1].illustration} alt={offers[1].title} />
            </ImageCtn>
          </FirstRowSecondCard>
        </Offers>
        <Offers>
          <SecondRowFirstCard flexSize={1}>
            <ImageCtn>
              <Image src={offers[2].illustration} alt={offers[2].title} />
            </ImageCtn>
          </SecondRowFirstCard>
          <SecondRowSecondCard flexSize={2}>
            <ImageCtn>
              <Image src={offers[3].illustration} alt={offers[3].title} />
            </ImageCtn>
          </SecondRowSecondCard>
          <SecondRowThirdCard flexSize={1}>
            <ImageCtn>
              <Image src={offers[4].illustration} alt={offers[4].title} />
            </ImageCtn>
          </SecondRowThirdCard>
        </Offers>
        <Offers>
          <ThirdRowFirstCard flexSize={1} data-last-card>
            <ImageCtn>
              <Image src={offers[5].illustration} alt={offers[5].title} />
            </ImageCtn>
          </ThirdRowFirstCard>
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;