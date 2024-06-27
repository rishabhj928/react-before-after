import type { MetaFunction } from "@remix-run/node";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const FIRST_IMAGE = {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'
  };
  const SECOND_IMAGE = {
    imageUrl: 'https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg'
  };
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Before After</h1>
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
    </div>
  );
}
