import { Fragment } from "react";
import { Link } from "react-router-dom"

export default function Article() {

    const data = [
        {
            id: 1,
            title: "The Worlds Largest Dog Breeds",
            preview: "Have you ever seen a dog who looked more like a bear or a horse than a pup? Chances are that pup was one of the world’s biggest dog breeds,....",
            img: "https://assets3.thrillist.com/v1/image/3111271/1584x1056/scale;webp=auto;jpeg_quality=60.jpg",
            link: "detailarticle1"
        },
        {
            id: 2,
            title: "What is the smallest dog in the world?",
            preview: "The world’s smallest individual dog, recognized by Guinness World Records, is Milly, a 1-pound Chihuahua born in 2011. Measuring 9.65 centimeters, or 3.8 inches tall....",
            img: "https://www.gannett-cdn.com/media/2021/12/22/USATODAY/usatsports/chihuahuas-e1512657950212.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
            link: "detailarticle2"
        },
        {
            id: 3,
            title: "Amazing Dog Facts",
            preview: "Our dogs have always been our most loyal companions, so it's only natural that we want to know as much as we can about them. Keep reading for our top 15 dog facts that you won't believe! ...",
            img: "http://cdn.akc.org/content/article-body-image/bmd_cute_puppies.jpg",
            link: "detailarticle3"
        }
    ]

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {data.map((data) => (
                    <Fragment key={data.id}>
                        <div className="flex justify-center items-center">
                            <div className="w-80 p-2 bg-white rounded-xl transition-all hover:-translate-y-1 duration-300 shadow-md hover:shadow-2xl">
                                <img className="h-70 object-cover rounded-xl" src={data.img}></img>
                                <div className="p-2"></div>
                                <h2 className="font-bold text-lg"> {data.title}</h2>
                                <p className="text-sm text-slate-700">
                                    {data.preview}
                                </p>
                                {
                                    <Link to={`/${data.link}`}>
                                        <div className="mr-4 mt-4 mb-4">
                                            <a role="button" href="#" className="text-white bg-black px-3 py-1 rounded-md hover:bg-slate-600 "> Read more</a>
                                        </div>
                                    </Link>
                                }
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </>
    );
}
