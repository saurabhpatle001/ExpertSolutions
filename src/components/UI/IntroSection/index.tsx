'use client';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FreedomSection/styles';
import Advanced_Waterproofing from '../../../../public/images/Advanced Waterproofing.png';
import Custom_Heatproofing from '../../../../public/images/Custom Heatproofing.png';
import Durable_Roof_Coating from '../../../../public/images/Durable Roof Coating.png';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  Card,
  LeftImage,
  MiddleImage,
  RightImage,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const IntroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
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
          </HeaderMainText>
        </Header>
        <CardsContainer>
          <Card>
            <LeftImage
              src={Advanced_Waterproofing}
              alt="Advanced Waterproofing"
              width={204}
              height={321}
            />
          </Card>
          <Card>
            <MiddleImage
              src={Custom_Heatproofing}
              alt="Custom Heatproofing"
              width={204}
              height={321}
            />
          </Card>
          <Card>
            <RightImage
              src={Durable_Roof_Coating}
              alt="Durable Roof Coating"
              width={204}
              height={321}
            />
          </Card>
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt={edge.point} width={50} height={50} />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;