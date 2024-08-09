import React from "react";
import client1 from "../assets/clientReviews/t1.jpg"
import client2 from "../assets/clientReviews/t2.jpg"
import client3 from "../assets/clientReviews/t3.jpg"
import client4 from "../assets/clientReviews/t4.jpg"
import client5 from "../assets/clientReviews/t5.jpg"
import client6 from "../assets/clientReviews/t6.jpg"
import client7 from "../assets/clientReviews/t7.jpg"

function ClientsReviewsGallery() {
  return (
    <div>
      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client1} height={450}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client2}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client3}
                alt
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client4}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client5}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client6}
                alt
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client7}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={"../assets/clientReviews/t8.jpg"}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client1}
                alt
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client1}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client1}
                alt
              />
            </div>
            <div>
              <img
                className="border p-2 border-black h-auto max-w-full rounded-lg"
                src={client1}
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsReviewsGallery;
