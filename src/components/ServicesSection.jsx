import ServicesSectionItem from './ServicesSectionItem';
import data from '../data/index-data';

const ServicesSection = () => {
  const serviceAudioData = data.serviceAudioData;
  return (
    serviceAudioData.map((serviceAudioItem) => {
      return (
        <ServicesSectionItem
          key={serviceAudioData.id}
          id={serviceAudioItem.id}
          title={serviceAudioItem.title}
          description={serviceAudioItem.description}
          images={serviceAudioItem.images}
          audioUrl={serviceAudioItem.audioUrl}
        />
      )
    })
  );
};

export default ServicesSection;
