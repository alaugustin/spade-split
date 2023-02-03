// import logo from '../logo.svg';
import './mainPage.css';
import Paragraph from '../Paragraph/Paragraph';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';

function App() {
  return (
    <>
      <Heading HeadingTag='h1' className='text-center' text='Bootstrap 5 Grid' />

      <div className="allHolder container">
        <div className="row">
          <div className="text-center d-flex flex-column">
            <Heading HeadingTag='h2' className='' text='Executive Team.' />
            <Paragraph paragraphCopy='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et gravida quam, id dapibus lacus. Maecenas tristique nulla eros, in volutpat ipsum consequat at.' />
          </div>

          <div className="d-flex justify-content-center">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12 col-sm-6 col-md-4">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 1 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 1' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
          <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 2 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 2' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
          <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 3 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 3' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
          <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 4 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 4' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
          <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 5 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 5' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
          <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 6 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 6' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
          <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4">
            <div className="teamCard d-flex flex-column border justify-content-center align-items-center rounded col-12">
              <Image imgSrc='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className='profileImage rounded-circle' imageAlt='Item 7 avatar' />
              <Heading HeadingTag='h3' className='' text='Item 7' />
              <Paragraph paragraphCopy='Some text lorem ipsum' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
