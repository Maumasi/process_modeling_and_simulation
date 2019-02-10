import React from 'react';

const Content = () => {
  return (
    <div className="ui vertical segment grid">
      <content className="sixteen wide column">
        <h2>Preface</h2>
        <p>
          The articles found on this site explore vignettes of a fictitious, but typical retail business. The evolution of a business called Pay-n-Leave will play the role of a case study lead by market scenarios and challenges. Market information within the following articles are cited sources unless otherwise stated where fabricated data was used to act as company data.
        </p>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        <h2>Introduction</h2>
        <p>
          Pay-n-Leave is a one-stop shopping experience where grocery, pharmacy, clothing, garden, toys, kitchen ware, automotive, sports, and a range of other departments than can support every shopper’s needs. The retailer had implemented a version of a traditional customer loyalty program (CLP) that had produced results once upon a time. Now with the rise of mobile apps, new technologies, and better insights through company data into customer buying habits the current version of the CLP needs an upgrade.
        </p>
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
          The current version of the CLP is costly in employee productivity and resources, opens plenty of opportunity to enter bad data with the registration process, and worst of all it violates customer trust when sharing customer data with outside sources just to recover lost customer investment.
        </p>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>


      </content>
    </div>
  );
}

export { Content };
