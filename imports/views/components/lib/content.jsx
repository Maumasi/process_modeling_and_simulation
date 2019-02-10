import React from 'react';

import { Image } from './image'
import { ComparisonTable } from './comparison_table'

const Content = () => {
  return (
    <div className="ui vertical segment grid">
      <div className="one wide column"></div>
      <content className="fifteen wide column">

        <h1 className="page-title"><span>Research and Analysis</span></h1>
        <div className="ui hidden divider"></div>

        <h2>Preface</h2>
        <p>
          The articles found on this site explore vignettes of a fictitious, but typical retail business. The evolution of a business called Pay-n-Leave will play the role of a case study lead by market scenarios and challenges. Market information within the following articles are cited sources unless otherwise stated where fabricated data was used to act as company data.
        </p>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        <h2 id="introduction">Introduction</h2>
        <p>
          Pay-n-Leave is a one-stop shopping experience where grocery, pharmacy, clothing, garden, toys, kitchen ware, automotive, sports, and a range of other departments can support every shopper’s needs. The retailer had implemented a version of a traditional customer loyalty program (CLP) that had produced results once upon a time. Now with the rise of mobile apps, new technologies, and better insights through company data into customer buying habits the current version of the CLP needs an upgrade.
        </p>


        <div className="ui hidden divider"></div>
        <h3>Current Pay-n-Leave CLP Model</h3>
        <Image srcLink="https://i.imgur.com/GMwWPWI.jpg" desription="Current Pay-n-Leave CLP flow diagram" width="100%" />
        <div className="ui hidden divider"></div>

        {
          // IMAGE: image of current CLP flow chart
        }
        <p>
          The current CLP  starts with a customer registering for a loyalty card. If there are no issues putting in customer information then Pay-n-Leave can start recording customer buying habits, but if the customer forgot some required information the customer has to write down their information again. Hopefully the customer wrote down the correct information and the Pay-n-Leave clerk entering the customer registration information into the company’s database didn’t make any mistakes because that information is used to market to that specific customer when weekly ads are mailed out. If the customer wants to take advantage of the CLP, they have to remember to bring their ad coupons back to the store and remember to use them at checkout. If the customer follows all these steps to a “T”, then they can be rewarded with more coupons at checkout with their receipt which are generated based off known products bought in the past.
        </p>

        <p>
          After a year of a customer participating in the CLP, they would be analyzed to determine if they are a profitable investment or if while continuing to market to them also share their customer data with advertisers and partners, whom pay for such data to soften the cost of lost investment in that customer.
        </p>

        <p>
          This CLP model is costly in both employee productivity and resources, opens plenty of opportunity to enter bad data with the registration process, and worst of all it violates customer trust when sharing customer data with outside sources just to recover loss of customer investment.
        </p>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        <h2 id="proposed-business-model">Proposed Business Model</h2>
        <p>
          The proposed CLP model is designed to take advantage of current technology and put Pay-n-Leave ahead of the completion in the way of understanding Pay-n-Leave customers and gain insights about why customers buy what they buy. The proposed CLP model is centered around mobile devices. A 2017 survey study, conducted by Stratix, revealed that retailers who are deploying mobile POS successfully saw a 24% average increase in sales in 2017, over retailers who don’t implement mobility in-store <span className="citation">(New Research Indicates Retailers Deploying In-Store Mobile Successfully Are Seeing Upwards of 146% Sales Growth., 2018, January 08)</span>.
        </p>

        <p>
          With the proposed CLP version, the customer simply downloads a Pay-n-Leave app where they enter their own information freeing up Pay-n-Leave employees. As soon as the customer is finished registering, they are now officially in the CLP. Once in the CLP they will instantly have access to new customer CLP coupons and discounts as well as having the ability to redeem coupons that same day, giving the customer and Pay-n-Leave a quick win, intended to get the customer motivated to utilize the CLP app. The faster a new customer is signed (registered), the less time and resources your company has spent acquiring them <span className="citation">(Bauer, E., 2017, March 27)</span>. Customers will always have access to CLP perks as long as their mobile device is with them while they shop. Alerts can be sent to them if they forget to use a coupon or discount that hasn’t expired on the app and was just detected to be purchased, allowing customers to retro-actively redeem savings. Customers can use the CLP app to manually search for product coupons or can scan barcodes of products or search for coupons. Every time a customer uses the CLP app during a purchase, they earn points to unlock new tiers of discounts reveled for new products, some products have been previously bought and some haven’t. Discount tiers don’t always provide greater discounts, reaching higher level tiers unlocks a wider range of product discounts adding to the remaining coupons available to the customer. If points earned are thirty days or older, they drop off, lowering their unlocked discount tiers for the customer, incentivizing them to return for their monthly shopping list. By giving suggested product coupons, customers would be encouraged to explore outside of their normal shopping routine, in addition to providing Pay-n-Leave with greater insight as to what certain customer profiles are open to trying outside of their normal shopping habits.
        </p>

        <p>
          Because the CLP can provide value to the customer immediately, instead of the weekly coupons in the current Pay-n-Leave ads, individual customer value can be analyzed on any timeframe as well as general customer sentiment, general buying patterns, discovery of unusual consumer patterns and behavior such as a sudden shift in redeemed coupons in a category or a spike in queried coupons in the CLP app in a category.
        </p>

        <p>
          By getting customers familiar with the Pay-n-Leave CLP app and analyzing how successful it is, the translation to online sales and the viability of perusing an ecommerce venture may provide better insight to the probability of the success. Even if is an online order-to-pickup where retailers like Target have develpoed such a model to out preform during the holiday sales drop in 2017 and 2018 <span className="citation">(Bhattacharyya, S., 2019, January 11)</span>.
        </p>

        <div className="ui hidden divider"></div>
        <h3>Proposed Pay-n-Leave CLP Model</h3>
        <Image srcLink="https://i.imgur.com/drxe7A2.jpg" desription="New Proposed Pay-n-Leave CLP flow diagram" width="100%" />
        <div className="ui hidden divider"></div>

        <h2 id="kpi">Key Profit Indicators (KPI’s)</h2>
        <p>
          The following cost analysis comes from a customer base of 27M sampled from Target’s app user base <span className="citation">(Team, T., 2017, June 16)</span> and an annual cash flow of $4.466M pre-mobile app Target in 2015 <span className="citation">(TGT Cash Flow | Target Corporation Stock., 2019, February 09)</span> and Targets $2.21M and $4.046M cash and cash equivalent from Target’s balance sheet <span className="citation">(TGT Balance Sheet | Target Corporation Stock., 2019, February 09)</span>. Values for KPI’s were gathered from the following sources:
        </p>

        <ul>
          <li>
            <p>
              Direct mail coupon response rate: 5.1%
            </p>
            <p>(Bozeman, R., 2019, January 30)</p>
          </li>

          <li>
            <p>
              Mobile app coupon response rate: 17%
            </p>
            <p>(Pilon, A., 2016, October 07)</p>
          </li>

          <li>
            <p>
              Customer acquisition cost (CAC) : $10 [retail industry average]
            </p>
            <p>(Bauer, E., 2017, March 27)</p>
          </li>

          <li>
            <p>
              Unhappy customer churn rate: 11%
            </p>
            <p>(Johnston, R., 2018, March 27)</p>
          </li>

          <li>
            <p>
              Mobile development cost $200K and an annual maintenance cost of $46K
            </p>
            <p>(Team, T., 2019, January 29)</p>
          </li>

          <li>
            <p>
              Direct mail advertising setup cost $86.4K ($7.2K x 12 designs) with an annual campaign cost of $1.35M ($50 x 1000 units x (27M customers / 1000 units))
            </p>
            <p>(Becket, X., 2019, January 31)</p>
          </li>

          <li>
            <p>
              Customer retention of 5% increases profits by 25% to 95% or otherwise stated, 1% customer retention increases profits by 5% to 19%
            </p>
            <p>(Gallo, A., 2014, November 05)</p>
          </li>
        </ul>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <h2>Calculated KPI values are as follows</h2>

        <ul className="kpi-calc">
          <li>
            <p>
              Customer retention rate: (coupon response rate - (coupon response rate * unhappy customer churn rate))
            </p>
            <code>(0.051  - (0.051 * 0.11)) = 0.0453</code>
          </li>

          <li>
            <p>
              Mobile app customer retention rate: (coupon response rate - (coupon response rate / unhappy customer churn rate))
            </p>
            <code>(0.17 - (0.17 * 0.11)) = 0.1513</code>
          </li>

          <li>
            <p>
              Direct mail marketing ROI range: (customer retention rate * 5) and (customer retention rate * 19)
            </p>
            <code>(0.0453 * 5) = 0.2265 and (0.0453 * 19) = 0.8607</code>
          </li>

          <li>
            <p>
              Mobile app marketing ROI range: (customer retention rate * 5) and (customer retention rate * 19)
            </p>
            <code>(0.1513 * 5) = 0.7565 and (0.1513 * 19) = 2.8747</code>
          </li>
        </ul>


        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <h2 id="cost-analysis">Cost Analysis</h2>
        <ComparisonTable />

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <h2 id="conclution">Conclusion</h2>
        <p>
          To conclude this first article, a mobile coupon app has a high initial cost, but would be expected to produce greater profits in a shorter amount of time compared to the current direct mail coupon CLP system. In addition, the proposed mobile coupon app could provide more opportunities to gather data from Pay-n-Leave customers to use for generating insights of customer patterns and behaviors.
        </p>

        <div className="ui hidden divider"></div>
        <div class="ui divider"></div>
        <div className="ui hidden divider"></div>

        <h2 id="resources">References</h2>

        <ul className="ref-list">
          <li>
            <p>
              Bauer, E. (2017, March 27). All About Customer Acquisition Cost (CAC). Retrieved from
            <a href="https://www.propellercrm.com/blog/customer-acquisition-cost" target="_blank"> https://www.propellercrm.com/blog/customer-acquisition-cost</a>
            </p>
          </li>
          <li>
            <p>
              Becket, X. (2019, January 31). The Cost of Advertising Nationally Broken Down by Medium (2019). Retrieved from
            <a href="https://www.webfx.com/blog/business-advice/the-cost-of-advertising-nationally-broken-down-by-medium/" target="_blank"> https://www.webfx.com/blog/business-advice/the-cost-of-advertising-nationally-broken-down-by-medium/</a>
            </p>
          </li>
          <li>
            <p>
              Bhattacharyya, S. (2019, January 11). Target's investment in store pickup for online orders is paying off. Retrieved from
            <a href="https://digiday.com/retail/targets-investment-store-pickup-online-orders-paying-off/" target="_blank"> https://digiday.com/retail/targets-investment-store-pickup-online-orders-paying-off/</a>
            </p>
          </li>

          <li>
            <p>
              Bozeman, R. (2019, January 30). Direct Mail Cost - A Deep Dive Into Direct Mail Pricing. Retrieved from
            <a target="_blank" href="https://www.postalytics.com/blog/direct-mail-cost/"> https://www.postalytics.com/blog/direct-mail-cost/</a>
            </p>
          </li>
          <li>
            <p>
              Gallo, A. (2014, November 05). The Value of Keeping the Right Customers. Retrieved from
            <a target="_blank" href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"> https://hbr.org/2014/10/the-value-of-keeping-the-right-customers</a>
            </p>
          </li>
          <li>
            <p>
              Johnston, R. (2018, March 27). Is Your Retail Churn Rate Above Average? Retrieved from
            <a target="_blank" href="http://blog.bloomintelligence.com/is-your-retail-churn-rate-above-average"> http://blog.bloomintelligence.com/is-your-retail-churn-rate-above-average</a>
            </p>
          </li>

          <li>
            <p>
              Kennedy, D. S., & Slutsky, J. (2012, April 26). Marketing Math: What's a New Customer Really Worth? Retrieved from
            <a target="_blank" href="https://www.entrepreneur.com/article/223426"> https://www.entrepreneur.com/article/223426</a>
            </p>
          </li>
          <li>
            <p>
              Mansfield, M. (2018, December 26). CUSTOMER RETENTION STATISTICS – The Ultimate Collection for Small Business. Retrieved from
            <a target="_blank" href="https://smallbiztrends.com/2016/10/customer-retention-statistics.html"> https://smallbiztrends.com/2016/10/customer-retention-statistics.html</a>
            </p>
          </li>
          <li>
            <p>
              New Research Indicates Retailers Deploying In-Store Mobile Successfully Are Seeing Upwards of 146% Sales Growth. (2018, January 08). Retrieved from
            <a target="_blank" href="https://www.businesswire.com/news/home/20180108005576/en/Research-Retailers-Deploying-In-Store-Mobile-Successfully-146"> https://www.businesswire.com/news/home/20180108005576/en/Research-Retailers-Deploying-In-Store-Mobile-Successfully-146</a>
            </p>
          </li>
        </ul>

      </content>
    </div>
  );
}

export { Content };
