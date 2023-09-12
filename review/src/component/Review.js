import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Review(){
    // local reviews data
    const reviews = [
        {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        },
        {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        },
        {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        },
    ];

  // set starting item
    const [user,setUser] = useState(reviews[0]);
    const [currentItem, setCurrentItem]=useState(0);

      // show prev person
  function prevShow() {
    
    if (currentItem === 0) {
      setCurrentItem(reviews.length - 1);
    }
    else
    {
        setCurrentItem(currentItem-1);
    }
    console.log(`prev review:+${currentItem}`);
    setUser(reviews[currentItem]);
  };

  function nextShow() {
   
    if (currentItem >= reviews.length - 1) {
        setCurrentItem(0);
      }
      else{
        setCurrentItem(currentItem+1);
      }
      console.log(`next review:+${currentItem}`);
      setUser(reviews[currentItem]);
  };

  function randomShow() {
    console.log("random review");
  
    setCurrentItem(Math.floor(Math.random() * reviews.length));
    setUser(reviews[currentItem]);
  };

   

 // const user = useEffect(() => {},[]);

    return(
        <div className="review">
            <div className="img-container">
                <img src={user.img} id="person-img" alt="대체이미지1" />
            </div>
            <h4 id="author">{user.name}</h4>
            <p id="job">{user.job}</p>
            <p id="info">
               {user.text}
            </p>
            
            <div className="button-container">
                <button className="prev-btn" onClick={prevShow}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="next-btn" onClick={nextShow}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            
            <button className="random-btn" onClick={randomShow}>surprise me</button>
        </div>
        );
    };

export default Review;