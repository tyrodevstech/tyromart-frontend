import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { LazyLoadImage } from './EmblaCarouselLazyLoadImage'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

// fix height h-[30rem]

const BannerCarousel = ({ slides, options }) => {
  const [emblaRed, emblaApi] = useEmblaCarousel(
    options, [Autoplay()]
  );
  const [slidesInView, setSlidesInView] = useState([]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const updateSlidesInView = useCallback((emblaApi) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return;

    if (!emblaApi) return;
    updateSlidesInView(emblaApi);
    
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <div className="embla">
    <div className="embla__viewport" ref={emblaRed}>
      <div className="embla__container">
        {slides.map((index) => (
          <LazyLoadImage
            key={index}
            index={index}
            imgSrc={`https://wphix.com/template/topico-prev/topico/assets/img/slider/03/slider-0${index+1}.jpg`}
            inView={slidesInView.indexOf(index) > -1}
          />
        ))}
      </div>
    </div>


      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div> */}

  </div>
  );
};

export default BannerCarousel;
