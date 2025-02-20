import { ReactNode } from 'react';
import { ReactComponent as AiAgent } from '../../../assets/icons/ai-agents.icon.svg';
import { ReactComponent as DataMuse } from '../../../assets/icons/datamuse.icon.svg';
import { ReactComponent as AiEmotion } from '../../../assets/icons/ai-emotion.icon.svg';
import { ReactComponent as CompetAi } from '../../../assets/icons/compet-ai.icon.svg';

import aiAgent from '../../../assets/icons/ai-agents.icon.svg';
import dataMuse from '../../../assets/icons/datamuse.icon.svg';
import aiEmotion from '../../../assets/icons/ai-emotion.icon.svg';
import competAi from '../../../assets/icons/compet-ai.icon.svg';

interface Pillar {
  title: string;
  icon: React.ReactElement;
  subtitle?: string;
  description?: string;
  button?: string;
}
export const pillars: Pillar[] = [
  {
    title: 'DataMuse',
    subtitle: '“The Art and Science of Brand Identity”',
    description:
      'Powered by advanced machine learning,  Datamuse predicts the perfect brand structure,  color palette, and archetype to resonate with your audience. ',
    icon: <DataMuse className="image-1 image-fixed" />,
    button: 'Explore Datamuse',
  },
  {
    title: 'AI Emotion',
    subtitle: '"The Science of Emotional Precision in Marketing." ',
    description:
      'AI Emotion replaces outdated KPIs like views  by leveraging neural networks to diagnose emotions,  predict behavior, optimize targeting, and scale your audiance  Engagement through real-time analytics. ',
    icon: <AiEmotion className="image-2 image-fixed" />,
    button: 'Explore AI emotion',
  },
  {
    title: 'Compet AI',
    subtitle: 'Master the competition—analyze, adapt, and lead ',
    description:
      'leverages advanced AI to track competitors  across platforms like LinkedIn and Meta,  analyzing theirsuccesses and failures while decoding  consumer trends to keep you always ahead in the market." ',
    icon: <CompetAi className="image-3 image-fixed" />,
    button: 'Explore CompetAI',
  },
  {
    title: 'AI Agents',
    subtitle: 'Automating tasks, optimizing teamwork, boosting productivity. ',
    description:
      'Our AI agents empower marketing teams and businesses by automating repetitive tasks, enhancing collaboration, and driving efficiency, delivering smarter workflows, optimized productivity, and measurable growth impact. ',
    icon: <AiAgent className="image-4 image-fixed" />,
    button: 'Explore AI agents',
  },
];

export const pillars2 = [
  {
    id: 1,
    // image:
    //   'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif',
    // image: <DataMuse className="card-img image-1 image-fixed" />,
    image: dataMuse,
    alt: 'Fantasy warrior - Video game character',
    button: 'Explore Datamuse',
    title: 'Data Muse',
    subtitle: '“The Art and Science of Brand Identity”',
    description:
      'Powered by advanced machine learning,  Datamuse predicts the perfect brand structure,  color palette, and archetype to resonate with your audience. ',
  },
  {
    id: 2,
    // image:
    //   'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif',
    // image: <DataMuse className="card-img image-1 image-fixed" />,
    image: aiEmotion,
    alt: 'Green haired ninja in armor - Video game character',
    button: 'Explore AI emotion',
    title: 'AI Emotion',
    subtitle: '"The Science of Emotional Precision in Marketing." ',
    description:
      'AI Emotion replaces outdated KPIs like views  by leveraging neural networks to diagnose emotions,  predict behavior, optimize targeting, and scale your audiance  Engagement through real-time analytics. ',
  },
  {
    id: 3,
    // image:
    //   'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif',
    // image: <DataMuse className="card-img image-1 image-fixed" />,
    image: competAi,
    alt: 'Female warrior in armor - Video game character',
    button: 'Explore CompetAI',
    title: 'Compet AI',
    subtitle: '“Master the competition—analyze, adapt, and lead" ',
    description:
      'leverages advanced AI to track competitors  across platforms like LinkedIn and Meta,  analyzing theirsuccesses and failures while decoding  consumer trends to keep you always ahead in the market." ',
  },
  {
    id: 4,
    // image:
    //   'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif',
    // image: <DataMuse className="card-img image-1 image-fixed" />,
    image: aiAgent,
    alt: 'AI Agents',
    button: 'Explore AI agents',
    title: 'AI Agents',
    subtitle:
      '“Automating tasks, optimizing teamwork, boosting productivity." ',
    description:
      'Our AI agents empower marketing teams and businesses by automating repetitive tasks, enhancing collaboration, and driving efficiency, delivering smarter workflows, optimized productivity, and measurable growth impact. ',
  },
  // {
  //   id: 5,
  //   // image:
  //   //   'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif',
  //   // image: <DataMuse className="card-img image-1 image-fixed" />,
  //   image: aiAgent,
  //   alt: 'AI Agents',
  //   headline: 'Automating 5 tasks, optimizing teamwork, boosting productivity.',
  //   highlight: 'AI Agents',
  //   desc: 'Lead your team to victory with unparalleled strength and unwavering determination.',
  // },
];
