import React from 'react';

import { Image } from './image';
import { ComparisonTable } from './comparison_table';
import { FiveYearPlanTable } from './five_year_plan_table';
import { ReferenceList } from './reference_list';

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
        <div className="example-images">
          <Image srcLink="https://i.imgur.com/PGWvq0G.jpg" desription="Beverages in store" width="90%" />
          <Image srcLink="https://i.imgur.com/k0subXh.jpg" desription="Shoes and shirt in store" width="95%" />
        </div>
        <div className="ui hidden divider"></div>

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


        {
          // Wk2 Assignment
        }

        <h2 id="business-process-analysis">Business Process Analysis</h2>

        <div className="ui hidden divider"></div>
        <h3 id="sales-strategy">Sales Strategy</h3>
        <Image srcLink="https://i.imgur.com/XFtHcBW.jpg" desription="discrete event simulation diagram" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          In the discrete event simulation diagram above, the steps involved walk through a customer loyalty program (CLP) member going to Pay-n-Leave and searching for a coupon. By using a rotating set of default coupons determined by Pay-n-Leaves business objectives and best preforming products member profiles can begin to be customized through member engagement with the CLP app. Every coupon query adjusts the weight of coupon options available to the member as well as the coupons redeemed by the CLP member. Manufacturer coupons should always be offered to the member. If a manufacturers coupon is not available or more coupons need to be generated due to a new coupon tier being unlocked an algorithmic process can determine the coupon type to be offered. When a coupon is added to, what is currently being referred to as, the “Shopping List” to be used at checkout. After a coupon is redeemed an elapsed timer begins for the CLP points, defining the length of contribution to the member’s total CLP point stack to unlock coupon tiers.
        </p>

        <p>
          The transition from an ad-based marketing approach to a mobile app base CLP offers range of benefits not capable of being realized in Pay-n-Leave’s current marketing campaigns. A study conducted by Vibes.com <span className="citation">(2016)</span> shows a total of 73% of consumers with smart phones are interested in saving customer loyalty apps on their phones and 38% are very interested in a mobile CLP app. In the U.S., 77% of adults use or own a smart phone <span className="citation">(Demographics of Mobile Device Ownership and Adoption in the United States., 2018, February 05)</span>, which means that roughly 18.9M of Pay-n-Leave’s 27M customers are likely to own or use a smart phone. At the high end 13.8M customers would be interested in the CLP app and 7.2M on the low end. The same adoption percentages convert to the probability of success at a range between 73% - 38%. Another measure of success to consider is the value of data Pay-n-Leave will begin to have access to and start benefiting from the business insights gained, which at this time could only be speculative thought placing Pay-n-Leave in a position to start collecting data on consumer behaviors to customize shopping experiences for their costumers soon than later is going to be a better move than collecting less data.
        </p>

        <div className="ui hidden divider"></div>
        <h2 id="pricing-analysis">Pricing Analysis</h2>
        <h3 id="domestic-in-store-pricing-strategy">Domestic In-Store Pricing Strategy</h3>
        <Image srcLink="https://i.imgur.com/MiyHwwt.jpg" desription="casaul loop describing pricing strategy" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          In the causal loop diagram, there are eight loops and partial loops. In <span className="italics">R</span><span className="lil-num">3</span>, a CLP member earns points to unlock new coupon tiers creating greater buying power for the member, leading to increased spending and buying frequency which in turn generates more CLP points for the member. <span className="italics">R</span><span className="lil-num">2</span> is the extension of <span className="italics">R</span><span className="lil-num">3</span> that describes the effect of store generated coupons that also lead to increased member buying power. The <span className="italics">R</span><span className="lil-num">5</span> loop illustrates that an increase in customer buying power also leads to members searching for more coupons and new coupons where data can be collected. <span className="italics">R</span><span className="lil-num">6</span> shows that collecting data enables business insights adding value to the member, raising customer retention and building brand trust where members are more willing to utilize the CLP app to redeem coupons, continuing to build Pay-n-Leave’s consumer profiles.
        </p>

        <p>
          While giving the CLP member more buying power through coupons, increasing store sales volume and increasing total profits in <span className="italics">B</span><span className="lil-num">2</span> it also opens the opportunity for members that don’t increase their spending habits to get a discounted price at the stores expense shown in <span className="italics">R</span><span className="lil-num">4</span>, which is part of the risk involved with generating store discount coupons. Members that tend to not increase their spending habits still provide valuable data to the business to be used in generating business insights.
        </p>

        <p>
          <span className="italics">R</span><span className="lil-num">1</span> shows how seasonal products like produce or holiday themed products lead to scarcity of availability, where members will likely be more interested in buying those items before they’re gone for the season or raise in price due to being out of season. Additionally, coupons for scarcity products referred to in <span className="italics">R</span><span className="lil-num">1</span> should have a sooner expiration, notifying members of the coupon soon to be gone as the season comes to a close. As CLP points expire, elapsing past the 30-day limit to encourage members to come back for their monthly shopping, shown as the <span className="italics">B</span><span className="lil-num">1</span> loop, the member’s coupon tiers will begin to lock up as their total CLP points lower day by day.
        </p>


        <div className="ui hidden divider"></div>
        <h3 id="online-ecommerce-pricing-strategy">Online Ecommerce Pricing Strategy</h3>
        <Image srcLink="https://i.imgur.com/8wYWFOw.jpg" desription="stock and flow diagram" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          The stock and flow diagram depict how the online venture, driven by the mobile CLP app data could be structured to compete in the online ecommerce space.
        </p>

        <p>
          Online-only CLP coupons would be the initial incentive to CLP members. Outside factors of Pay-n-Leave’s control might be the economic environment like the event of Pay-n-Leave customers feeling the effects of a recession or as seasonal products come in and are not available at all Pay-n-Leave locations. The use of online-only coupons will help build consumer sentiment from the data, which could be further driven by marketing directly to CLP members through the app. Considerations for legal restriction and regulations on what data can be collected and how data can be used.
        </p>

        <p>
          Site traffic can be increased by using business insights on what Pay-n-Leave customers are looking for and when they are looking for it can help efforts towards SEO/SER campaigns, in addition to social media marketing as well as utilizing more ways consumers are able to checkout, using alternate payment methods such as Bitcoin, other Alt-Coins, PayPal, etc.
        </p>

        <p>
          After online sales, marketing campaigns can be measured for effectiveness and adjusted as needed. Marketing campaigns are also subject to relevant market competition which can also be tested against business insights gained from the CLP app. Finally, prices strategies can be determined after profits are analyzed, where the in-house CLP app marketing platform can be planned for the next quarter. An additional variable to measure are shipping options used in Pay-n-Leave warehouses, which will add another level of complexity to the supply chain when launching a platform for the world to buy from.
        </p>




        {
          // Wk3 Assignment
        }
        <h2 id="operations-research">Operations Research</h2>

        <div className="ui hidden divider"></div>
        <h2 id="operations-analysis">Operations Analysis</h2>

        <p>
          A high-level overview of what a five-year plan could look like for the Mobile CLP app can help visualize what is likely to go into each phase of implementing the app.  Below are phases by year of the five-year plan.
        </p>


        <div className="ui hidden divider"></div>
        <h3 id="5yr-plan-phase-1">Phase 1: Define Mission and Expectations</h3>
        <Image srcLink="https://i.imgur.com/jXfjfPV.jpg" desription="5 year plan: phase 1" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          By defining the mission of what a Mobile CLP app can provide for Pay-n-Leave, business process requirements can be driven by higher management at the department level. Requirements from the executive level can be used to guide the requirements across the organization. Some examples of business requirements could be to gather information around customer support, what coupons are searched for by department and frequency to gain customer sentiment on product categories coming into demand. Requirements should first be defined by the way data is currently being used by departments and how it’s used to support business processes.
        </p>


        <div className="ui hidden divider"></div>
        <h3 id="5yr-plan-phase-2">Phase 2: Situation Analysis</h3>
        <Image srcLink="https://i.imgur.com/9TGaLoV.jpg" desription="5 year plan: phase 2" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          At this phase, the mobile app would go into development for 6-12 months <span className="citation">(Korkishko, I., 2017, October 25)</span>.  Requirements or the intent for the requirements can be adjusted for the app during this phase. Stakeholders will get the chance to oversee progress of the app to ensure requirements are being implemented in a way that supports the mission of the app at weekly stand-up meetings and at project milestones. By the end of year-2 [phase 2] the enterprise level mobile app should be ready for a beta deployment.
        </p>


        <div className="ui hidden divider"></div>
        <h3 id="5yr-plan-phase-3">Phase 3: Marketing and Strategy</h3>
        <Image srcLink="https://i.imgur.com/z36gtjv.jpg" desription="5 year plan: phase 3" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          In phase 3, A/B testing in a limited consumer base would begin. Florida would provide a good beta deployment for its ranking in the top 10 consumer states <span className="citation">(Hamilton, K., 2015, November 10)</span>. During this testing period UX/UI changes can be altered to fit performance with Pay-n-Leave customers. Server and EDM performance can also be calibrated during this live test. Stakeholders can also determine how user adoption meets their expectations as well as how the app’s live data compares to the data currently being utilized by Pay-n-Leave. By the end of this phase, any changes that need to have can be finalized before deploying nation-wide to all Pay-n-Leave customers.
        </p>


        <div className="ui hidden divider"></div>
        <h3 id="5yr-plan-phase-4">Phase 4: Market Mix</h3>
        <Image srcLink="https://i.imgur.com/BaylOhN.jpg" desription="5 year plan: phase 4" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          As part of the promotion of the new CLP app, A/B testing would undergo more A/B testing for the marketing effectiveness per region because every demographic across the U.S. is going to be slightly different. To be clear, the CLP app’s look and feel A/B testing is over and should not differ. Doing so would cause confusion for users sharing information inline as well as for trouble shooting with customer service in a nation-wide deployment.
        </p>

        <p>
          Promotion of the new CLP app should be in the weekly mailers currently being used, suggested at time of checkout, through product placement around the store that are featured coupons in the CLP app, QR codes on receipts, etc. Pay-n-Leave needs to give customers every opportunity to download the app and attempt to remove any point of friction a customer might encounter.
        </p>

        <p>
          In phase four, “just-in-time” reporting can start to provide as close to real-time information to higher-level management as possible, let alone more timely and actionable data Pay-n-Leave can use to adjust to consumer needs or respond to logistic issues by detecting the most up to date demand for products directly from customers from their coupon queries.
        </p>


        <div className="ui hidden divider"></div>
        <h3 id="5yr-plan-phase-5">Phase 5: Monitor and Control</h3>
        <Image srcLink="https://i.imgur.com/filYyYp.jpg" desription="5 year plan: phase 5" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          At phase five, Pay-n-Leave will have about a year’s worth of customer data to analyze. This should be a large enough dataset to generate insights. If insights are not actionable, there needs to be some data exploration to understand the data as well as business objectives to find where there is a disconnect and possibly make a version update to the mobile app to address the issue.
        </p>

        <p>
          The data can also be used to support the viability of bringing Pay-n-Leave to the online market. If logistical data can identify trends or demands that an online Pay-n-Leave e-commerce site can solve or if coupons generated through CLP member profiles suggest that online-only coupons can supply strong online sales to kick-off an e-commerce launch, Pay-n-Leave can start to make moves to position for the online space.
        </p>


        <div className="ui hidden divider"></div>
        <h3>Table Summary</h3>
        <div className="ui hidden divider"></div>

        <p>
          The summarized data <span className="citation">(PnL Data and Sales Figures., 2019)</span> [fabricated] in the following table comes from an annual projection of the last 365 days to represent the final phase of the five-year plan, the first year after of the Mobile CLP app has launched. Table figures are averages from the 365 daily records.
        </p>

        <FiveYearPlanTable />

        <div className="ui hidden divider"></div>
        <h3 id="decision-analysis">Decision Analysis</h3>

        <div className="ui hidden divider"></div>
        <div class="ui divider"></div>
        <div className="ui hidden divider"></div>

        <p>
          By looking at factors that could have some level of impact on CLP member acquisition and ultimately CLP member retention, Pay-n-Leave can begin to fine-tune the total quality management of the customer’s experience in aid of those efforts. The following cause and effect graph highlights some of the most likely factors that contribute to customer retention.
        </p>


        <div className="ui hidden divider"></div>
        <h3>Cause and Effect For Customer Retention</h3>
        <Image srcLink="https://i.imgur.com/TSO7mka.jpg" desription="Cause and Effect Diagram" width="100%" />
        <div className="ui hidden divider"></div>

        <p>
          The cause and effect graph illustrate four categories that contribute to a customer keeping and using the CLP app or falling away from it.
        </p>

        <p>
          Technology the app is run on needs to perform the same regardless of the operating system (OS). Given the thousands of device sizes and capabilities, there is bound to raise technical issues, likely small but inconvenient issues. This is where hotfixes or minor version updates will have to be done. Often a fix for one major device will fix the same issue across a broad range of devices. Server overloading and downtime can be easily solved with master/slave server replication to prevent to loss of data or server sharding to evenly distribute database loads <span className="citation">(Rouse, M., 2011, December)</span> or a combination of both.
        </p>

        <p>
          Benefits to customer need to be clear to the member. By sending alerts and reminders can help member interaction and raise the app’s retention rate <span className="citation">(Adler, B., 2017)</span>.  Coupon tiers can be a factor to adjust per member based on their activity. Scannable functionality needs to constantly work as expected. Scan load times and coupon query load times can be a point of friction for members.
        </p>

        <p>
          Points of engagement to acquire new CLP members may need to be ran at a campaign level to keep the app from falling into a background promotion that gets ignored. Web promotions can consist of targeted Google queries and targeted social media filters that are relevant to Pay-n-Leave customers and Pay-n-Leave locations. Cashiers can ask for CLP app coupons to remind customers of the app or for the casher to inform customers of the app. QR codes on receipts can also provide an opportunity for cashiers to point out how to download the app with a smart phone. Featured coupon products should also be in store promotional locations to help market the app.
        </p>

        <p>
          UX/UI of the app is a major factor. If users don’t understand how to use it or user interactions don’t give expected feedback to the user, the adoption rate is going to be low <span className="citation">(Adler, B., 2017)</span>. Load speeds have a large impact on user conversion rates <span className="citation">(An, D., & Meenan, P., 2016, July)</span>. While speeding up load speeds will have technical limits by device and server performance factors, the perception of a load times being faster can be as simple as showing shaded partitions of the expected screen details before those details are actually loaded up. Animations and color theory are also factors contributing to user feedback without using text to communicate confirmations or user caused errors when selecting a coupon or scanning non-UPC barcodes.
        </p>


        <div className="ui hidden divider"></div>
        <h3>Decision Tree</h3>
        <div className="ui hidden divider"></div>

        <p>
          The following decision tree diagram illustrates how moving forward with a mobile app for CLP members not only provides benefits to Pay-n-Leave customers but also brings value to the Pay-n-Leave organization.
        </p>

        <Image srcLink="https://i.imgur.com/vhkPLVe.jpg" desription="Decision Tree Diagram" width="100%" />

        <p>
          By measuring data metrics, cost per lead, and estimated sales the mobile CLP app projections are over $2M in sales alone which is also the deciding factor. The CPL app out preforms Pay-n-Leave’s current projections in every category except in the event of the CLP app having a shrink year. Due to generated store discount coupons annual losses for a shrink year are by just over $50K.
        </p>


        <div className="ui hidden divider"></div>
        <h3>Conclusion</h3>
        <Image srcLink="https://i.imgur.com/asyMdgi.png" desription="Tableau data projection" width="100%" />
        <a target="_blank" href="https://public.tableau.com/profile/maumasi#!/vizhome/ProcessandModeling-wk3/Dashboard1?publish=yes">Tableau Graph</a>
        <div className="ui hidden divider"></div>

        <p>
          In conclusion, if the mobile CLP app had launched twelve months ago the above graphs illustrates that the projected sales leading up to the 2019 first quarter would have had a much stronger lead than our current marketing strategy with customer loyalty. It is also worth noting that data collected is in direct proportion to sales projections and the cost per lead is more than 100 times less, likely attributed to savings on the cost spent on materials weekly across the nation on ads. It can be seen that there is a sudden dip after December just as it is with Pay-n-Leave’s current strategy. The post-holiday slump may not be solved by implementing the mobile CLP app, but data could be collected during this timeframe to begin to address that business objective through the CLP app.
        </p>

        <p>
          The future of the retail industry is one where consumers have thousands of competitors at their fingertips. Some of Pay-n-Leave’s competition has already successfully launched their own mobile CLP apps <span className="citation">(Tode, C., n.d.)</span> and now it’s time for Pay-n-Leave to position its self on a level playing field on the technology front.
        </p>


        <h2 id="resources">References</h2>

        <ReferenceList
          references={[
            {
              reference: "Assorted Bottle And Cans. (n.d.). Retrieved from",
              link: "https://www.pexels.com/photo/assorted-bottle-and-cans-811108"
            },
            {
              reference: "Bauer, E. (2017, March 27). All About Customer Acquisition Cost (CAC). Retrieved from",
              link: "https://www.propellercrm.com/blog/customer-acquisition-cost"
            },
            {
              reference: "Becket, X. (2019, January 31). The Cost of Advertising Nationally Broken Down by Medium (2019). Retrieved from",
              link: "https://www.webfx.com/blog/business-advice/the-cost-of-advertising-nationally-broken-down-by-medium"
            },
            {
              reference: "Bhattacharyya, S. (2019, January 11). Target's investment in store pickup for online orders is paying off. Retrieved from",
              link: "https://digiday.com/retail/targets-investment-store-pickup-online-orders-paying-off"
            },
            {
              reference: "Bozeman, R. (2019, January 30). Direct Mail Cost - A Deep Dive Into Direct Mail Pricing. Retrieved from",
              link: "https://www.postalytics.com/blog/direct-mail-cost"
            },
            {
              reference: "Gallo, A. (2014, November 05). The Value of Keeping the Right Customers. Retrieved from",
              link: "https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
            },
            {
              reference: "Johnston, R. (2018, March 27). Is Your Retail Churn Rate Above Average? Retrieved from",
              link: "http://blog.bloomintelligence.com/is-your-retail-churn-rate-above-average"
            },
            {
              reference: "Kennedy, D. S., & Slutsky, J. (2012, April 26). Marketing Math: What's a New Customer Really Worth? Retrieved from",
              link: "https://www.entrepreneur.com/article/223426"
            },
            {
              reference: "Mansfield, M. (2018, December 26). CUSTOMER RETENTION STATISTICS – The Ultimate Collection for Small Business. Retrieved from",
              link: "https://smallbiztrends.com/2016/10/customer-retention-statistics.html"
            },
            {
              reference: "New Research Indicates Retailers Deploying In-Store Mobile Successfully Are Seeing Upwards of 146% Sales Growth. (2018, January 08). Retrieved from",
              link: "https://www.businesswire.com/news/home/20180108005576/en/Research-Retailers-Deploying-In-Store-Mobile-Successfully-146"
            },
            {
              reference: "Pair of Brown Leather Casual Shoes on Table. (n.d.). Retrieved from",
              link: "https://www.pexels.com/photo/classic-clothes-commerce-fashion-298863"
            },
            {
              reference: "Pilon, A. (2016, October 07). Mobile Coupons Survey: Retailers Could Improve with Mobile Apps. Retrieved from",
              link: "https://aytm.com/blog/mobile-coupons-survey"
            },
            {
              reference: "Target's Raising Its Minimum Hourly Wage This Fall, and That's Just the Beginning ... (2017, September 25). Retrieved from",
              link: "https://corporate.target.com/article/2017/09/minimum-hourly-wage"
            },
            {
              reference: "Team, T. (2017, June 16). Why Target Is Consolidating Its Mobile Apps. Retrieved from",
              link: "https://www.forbes.com/sites/greatspeculations/2017/06/16/why-target-is-consolidating-its-mobile-apps/#609c0f986f75"
            },
            {
              reference: "Team, T. (2019, January 29). How Much Does it Cost to Make an App in 2018 - App Cost Calculator - 2019. Retrieved from",
              link: "https://thinkmobiles.com/blog/how-much-cost-make-app"
            },
            {
              reference: "TGT Balance Sheet | Target Corporation Stock. (2019, February 09). Retrieved from",
              link: "https://finance.yahoo.com/quote/TGT/balance-sheet?p=TGT"
            },
            {
              reference: "TGT Cash Flow | Target Corporation Stock. (2019, February 09). Retrieved from",
              link: "https://finance.yahoo.com/quote/TGT/cash-flow?p=TGT"
            },


            // WK2 References
            {
              reference: "Competitive Pricing Strategy -- See How Products Are Priced. (2016, September 07). Retrieved from",
              link: "https://www.intelligencenode.com/blog/competitive-pricing-strategy-see-products-priced"
            },
            {
              reference: "Demographics of Mobile Device Ownership and Adoption in the United States. (2018, February 05). Retrieved from ",
              link: "http://www.pewinternet.org/fact-sheet/mobile"
            },
            {
              reference: "Google Trends. (2019, Feb 15). Query: \"online deals\". Retrieved from",
              link: "https://trends.google.com/trends/explore?date=all&geo=US&q=online%20deals"
            },
            {
              reference: "Google Trends. (2019, Feb 15). Query: \"produce\". Retrieved from ",
              link: "https://trends.google.com/trends/explore?date=all&geo=US&q=produce"
            },
            {
              reference: "Hanbury, M. (2018, August 27). The clever tricks Target uses to get you to keep spending money. Retrieved from",
              link: "https://www.businessinsider.com/how-target-gets-you-to-spend-more-money-in-store-2018-4#customers-love-its-private-label-collections-4"
            },
            {
              reference: "Vibes.com. (2016). 2016 Mobile Consumer Study. Retrieved from https://vibes-marketing.s3.amazonaws.com/Website/Reports_%24folder%24/2016-MobileConsumerReport.pdf",
              link: "https://vibes-marketing.s3.amazonaws.com/Website/Reports_%24folder%24/2016-MobileConsumerReport.pdf"
            },
            {
              reference: "Thomas, J. (2017, November 06). Basic sales analysis. Retrieved from http://analytics-magazine.org/basic-sales-analysis",
              link: "http://analytics-magazine.org/basic-sales-analysis"
            },

            // Wk3 references
            {
              reference: "Adler, B. (2017). Mobile Apps: What's a Good Conversion Rate? Retrieved from",
              link: "http://info.localytics.com/blog/mobile-apps-whats-a-good-conversion-rate",
            },
            {
              reference: "An, D., & Meenan, P. (2016, July). Why Marketers Should Care About Mobile Page Speed. Retrieved from",
              link: "https://www.thinkwithgoogle.com/marketing-resources/experience-design/mobile-page-speed-load-time",
            },
            {
              reference: "Hamilton, K. (2015, November 10). Top 10 States for Retail. Retrieved from",
              link: "http://blog.naiop.org/2015/11/top-10-states-for-retail-2",
            },
            {
              reference: "Korkishko, I. (2017, October 25). Mobile app development timeline and stages. Retrieved from",
              link: "https://syndicode.com/2017/10/25/mobile-app-development-timeline-and-stages",
            },
            {
              reference: "PnL Data and Sales Figures. (2019). Retrieved from",
              link: "Fabricated Pay-n-Leave Data.xlsx",
            },
            {
              reference: "Rouse, M. (2011, December). What is sharding? - Definition from WhatIs.com. Retrieved from",
              link: "https://searchoracle.techtarget.com/definition/sharding",
            },
            {
              reference: "Tode, C. (n.d.). Target's Cartwheel 2.0 taps latest mobile best practices to drive conversions. Retrieved from",
              link: "https://www.retaildive.com/ex/mobilecommercedaily/targets-cartwheel-2-0-taps-latest-mobile-best-practices-to-drive-conversions",
            },
          ]}
        />

      </content>
    </div>
  );
}

export { Content };
