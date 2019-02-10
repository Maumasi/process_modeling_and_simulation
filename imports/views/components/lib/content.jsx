import React from 'react';

import { Image } from './image'

const Content = () => {
  return (
    <div className="ui vertical segment grid">
      <div className="one wide column"></div>
      <content className="fifteen wide column">
        <h2>Preface</h2>
        <p>
          The articles found on this site explore vignettes of a fictitious, but typical retail business. The evolution of a business called Pay-n-Leave will play the role of a case study lead by market scenarios and challenges. Market information within the following articles are cited sources unless otherwise stated where fabricated data was used to act as company data.
        </p>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        <h2 id="introduction">Introduction</h2>
        <p>
          Pay-n-Leave is a one-stop shopping experience where grocery, pharmacy, clothing, garden, toys, kitchen ware, automotive, sports, and a range of other departments than can support every shopper’s needs. The retailer had implemented a version of a traditional customer loyalty program (CLP) that had produced results once upon a time. Now with the rise of mobile apps, new technologies, and better insights through company data into customer buying habits the current version of the CLP needs an upgrade.
        </p>


        <div className="ui hidden divider"></div>
        <h3>Current Pay-n-Leave CLP Model</h3>
        <Image srcLink="https://i.imgur.com/GMwWPWI.jpg" desription="Current Pay-n-Leave CLP flow diagram" width="100%" />
        <div className="ui hidden divider"></div>

        {
          // IMAGE: image of current CLP flow chart
        }
        <p>
          The current CLP  starts with a customer registering for a loyalty card. If there are no issues putting in customer information then Pay-n-Leave can start recording customer buying habits, but if the customer forgot some required information the customer has to write down their information again. Now, hopefully the customer wrote down the correct information and the Pay-n-Leave clerk entering the customer registration information into the company’s database didn’t make any mistakes because that information is used to market to that specific customer when weekly ads are mailed out. If the customer wants to take advantage of the CLP, they have to remember to bring their ad coupons back to the store and remember to use them at checkout. If the customer follows all these steps to a “T”, then they can be rewarded with more coupons at checkout with their receipt which are generated based off known products bought in the past.
        </p>

        <p>
          After a year of a customer participating in the CLP, they would be analyzed to determine if they are a profitable investment or if while continuing to market to them also share their customer data advertisers and partners, whom pay for such data soften the lost investment in the customer at that time.
        </p>

        <p>
          This CLP model is costly in employee productivity and resources, opens plenty of opportunity to enter bad data with the registration process, and worst of all it violates customer trust when sharing customer data with outside sources just to recover lost customer investment.
        </p>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        <h2 id="proposed-business-model">Proposed Business Model</h2>
        <p>
          The proposed CLP model is designed to take advantage of current technology and put Pay-n-Leave ahead of the completion in the way of understanding Pay-n-Leave customers and gain insights about why customers buy what they buy, which could be a more important question to seek to answer. The new CLP model is centered around mobile devices. A 2017 survey study, conducted by Stratix, revealed that retailers who are deploying mobile POS successfully saw a 24% average increase in sales in 2017, over retailers who don’t implement mobility in-store (New Research Indicates Retailers Deploying In-Store Mobile Successfully Are Seeing Upwards of 146% Sales Growth., 2018, January 08).
        </p>

        <p>
          With the proposed CLP version, the customer simply downloads a Pay-n-Leave app where they enter their own information freeing up Pay-n-Leave employees. As soon as the customer is finished registering, they are now officially in the CLP. Once in the CLP they will instantly have access to new customer CLP coupons and discounts and can redeem them that same day, giving the customer and Pay-n-Leave a quick win, intended to get the customer motivated to utilize the CLP app. The faster a new customer is signed, the less time and resources your company has spent acquiring them (Bauer, E., 2017, March 27). Customers will always have access to CLP perks as long as their mobile device is with them while they shop. Alerts can be sent to them if they forget to use a coupon or discount that hasn’t expired on the app and was just detected to be purchased, allowing customers to retro-actively redeem discounts. Customers can use the CLP app to manually search for product coupons or can the barcodes of products the search for coupons. Every time a customer uses the CLP app during a purchase, they earn points to unlock new tiers of discounts reveled for new products, some they have previously bought and some they haven’t. Discount tier don’t always provide greater discounts, reaching higher level tiers unlocks a wider range of product discounts adding to the remaining coupons available to the customer. If points earned are thirty days or older, they drop off, lowering their unlocked discount tier of the customer, incentivizing them to return for their monthly shopping list. By giving suggested product coupons, customers would be encouraged to explore outside of their normal shopping routine, in addition to providing Pay-n-Leave with greater insight as to what certain customer profiles are open to trying outside of their normal shopping habits.
        </p>

        <p>
          Because the CLP can provide value to the customer immediately, instead of the weekly coupons in the Pay-n-Leave ads, individual customer value can be analyzed on any timeframe as can general customer sentiment, general buying patterns, discovery of unusual consumer patterns and behavior such as a sudden shift in redeemed coupons in a category or a spike in queried coupons in the CLP app in a category.
        </p>

        <p>
          By getting customers familiar with the Pay-n-Leave CLP app and analyzing how successful it is, the translation to online sales and the viability of perusing an ecommerce position and may provide a better insight to the probability of success of an implementation in the ecommerce market, even if is an online order to store pickup model where retailers like Target have utilized online sales to store pickup model to out preform during the holiday sales drop in 2017 and 2018 (Bhattacharyya, S., 2019, January 11).
        </p>

        <div className="ui hidden divider"></div>
        <h3>Proposed Pay-n-Leave CLP Model</h3>
        <Image srcLink="https://i.imgur.com/drxe7A2.jpg" desription="New Proposed Pay-n-Leave CLP flow diagram" width="100%" />
        <div className="ui hidden divider"></div>


      </content>
    </div>
  );
}

export { Content };
