import './execTeam.scss';
import Paragraph from '../Paragraph/Paragraph';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Section from '../Section/Section';
import Div from '../Div/Div';
import React from 'react';
import PropTypes from 'prop-types';

const ExecTeam = props => {
  const { HeadingText, className, introText } = props;

  return (
    <>
      <Section className={className}>
        <Div className='wrapper'>
          <Div className='allHolder container'>
            <Div className='row'>
              <Div className='text-center d-flex flex-column'>
                <Heading HeadingTag='h2' className='' text={HeadingText} />
                <Paragraph paragraphCopy={introText} />
              </Div>

              <div className="d-flex justify-content-center">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12 col-sm-6 col-md-4">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 1 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 1' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 2 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 2' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 3 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 3' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 4 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 4' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 5 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 5' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 6 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 6' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
                <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
                  <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='teamCard--profileImage rounded-circle' imageAlt='Item 7 avatar' />
                  <Heading HeadingTag='h3' className='' text='Item 7' />
                  <Paragraph paragraphCopy='Some text lorem ipsum' />
                </div>
              </div>
            </Div>
          </Div>
        </Div>
      </Section>
    </>
  );
}

ExecTeam.propTypes = {
  HeadingTag: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default ExecTeam;
