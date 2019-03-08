<?php /*
Template Name: Customer Story (Preview)
 */?>

<?php get_header(getHeaderTemplateName()) ?>

    <div class="grid-container -thin"><a class="cu-story_back-link" href="#">Back to Stories</a>
      <div class="cu-story_head">
        <div class="cu-story_head_subwrap">
          <div class="cu-story_head_content">
            <h3 class="cu-story_head_content_subtitle"><span>customer story</span><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/logos/Trice-Logo.png" alt="Trice"></h3>
            <h1 class="cu-story_head_content_title">How Trice Imaging Gets Better Monitoring With Metricly. </h1>
            <div class="cu-story_head_content_featured">
              <p class="cu-story_head_content_featured_label">Feautured commentator </p>
              <p class="cu-story_head_content_featured_name">
                 <b>Kris Kumler</b>
<span>-</span>
<br class="hide-desktop hide-laptop">Lead Automation Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cu-story_content">
      <div class="grid-container -thin" data-sticky-container>
        <aside class="cu-story_sidebar">
          <div class="cu-story_sidebar_block -about">
            <h5>About</h5>
            <ul class="cu-story_sidebar_block_content">
              <li class="cu-story_sidebar_block_content_item">
                <p class="cu-story_sidebar_block_content_item_title">Industry</p>
                <p class="cu-story_sidebar_block_content_item_value">Medical Devices, SaaS</p>
              </li>
              <li class="cu-story_sidebar_block_content_item">
                <p class="cu-story_sidebar_block_content_item_title">Company size</p>
                <p class="cu-story_sidebar_block_content_item_value">11 - 50</p>
              </li>
              <li class="cu-story_sidebar_block_content_item">
                <p class="cu-story_sidebar_block_content_item_title">Headquarters</p>
                <p class="cu-story_sidebar_block_content_item_value">Del Mar, CA</p>
              </li>
            </ul>
          </div>
          <div class="cu-story_sidebar_block">
            <h5>Objective </h5>
            <p> To get continuous monitoring with dynamic thresholds & leading indicators from past performance data.</p>
          </div>
          <div class="cu-story_sidebar_block">
            <h5>Success</h5>
            <p> Meaningful alerts and less noise using Metricly machine learning bands of normalcy.</p>
          </div>
          <div class="cu-story_sidebar_block -product">
            <h5>Product Uses</h5>
            <ul class="cu-story_sidebar_block_content">
              <li class="cu-story_sidebar_block_content_item"><a href="#">
                  <p class="cu-story_sidebar_block_content_item_title"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/header/icons/aws-cost2x.png" alt=""><span>Billing</span></p></a>
                <p class="cu-story_sidebar_block_content_item_description">Suggestions to fit your risk tolerance with cost-savings.</p>
              </li>
              <li class="cu-story_sidebar_block_content_item"><a href="#">
                  <p class="cu-story_sidebar_block_content_item_title"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/icons/cloud.svg" alt=""><span>Cloud</span></p></a>
                <p class="cu-story_sidebar_block_content_item_description">Suggestions to fit your risk tolerance with cost-savings.</p>
              </li>
            </ul>
          </div>
        </aside>
        <main class="cu-story_article">
          <h3>The Company</h3>
          <p>Trice Imaging securely connects medical devices and software to the cloud so that clinicians, patients and organizations can instantaneously access medical images from anywhere and collaborate remotely on cases. <br>Its award-winning Tricefy service has clinical users in 106 countries including Mount Sinai Hospital in New York, Carnegie Imaging for Women, New York, and the University of Colorado’s Anschutz Medical Campus.              </p>
          <h3>The Problem</h3>
          <p>When Lead Automation Engineer Kris Kumler started at Trice Imaging more than three years ago, the company was relying on reactive alerts and custom scripts, monitoring their server estate using the open source agent collectd. This setup failed to provide the continuous monitoring Trice aspired to have. Meanwhile, Kumler also needed the capability to act on some of the leading indicators and dynamic thresholds that were based on historical performance for a certain time of day or day of the week.</p>
          <figure><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/imgs/article-1@2x.png" alt="">
            <figcaption>Dashboard widget with expected values   </figcaption>
          </figure>
          <p>This graph on a dashboard widget shows the value of a metric along with expected values (in green) based on historic behavior of that metric over time for that time of day and day of the week, and the expected value (purple band) based on its correlation with other interdependent metrics.</p>
          <h3>The Solution</h3>
          <p>Kumler looked at several solutions, including Datadog, open source option Graphite, and AWS CloudWatch given that Trice’s environment is hosted in Amazon Web Services (AWS). Ultimately, he signed up for a trial with Metricly, saying that Metricly’s pricing fit within his budget. But during the trial period he noted that Metricly’s customer support “clinched the deal.”</p>
          <p>When Kumler first deployed Metricly’s solution, he remembers having some problems with setup. But he was impressed at how his technical salesperson at the time helped him track down the problems. “Some of them were our configuration problems. Other problems led to improved versions of the [Metricly] agent,” Kumler says.</p>
          <blockquote>
            <p>« When you’re getting things started up with a new monitoring solution, it’s more about responding to the right question, instead of brushing us off and having us do it on our own. »</p>
          </blockquote>
          <p>This graph shows Metricly’s behavior learning and bands of normalcy in Trice’s environment. The green band is based on historic analysis while the purple band is determined based on multivariate regression analysis.</p>
          <h3>The Result</h3>
          <p>Kumler says that Metricly solved Trice Imaging’s problem by providing continuous monitoring as well as several other features. He says that Metricly’s configurable policies and alerts, all of which may be tied to a baseline for the time of day and element is wonderful for generating meaningful alerts. “This is their big win and fundamental differentiator [and is] much easier than trying to accomplish this otherwise,” Kumler says. He adds that many of the alert policies Trice already has in place operate using the baseline bands of normalcy for automated anomaly detection of performance problems.</p>
          <p>Also, Metricly lets him watch when the network is at the lower usage times without hardcoded thresholds that would normally let things slip by, Kumler says. Trice’s traffic varies depending on the time of day.</p>
          <p>In addition, Kumler says he has started to explore some of the AWS utilization and cost reports, which provides calculated utilization metrics. Because Trice already uses Metricly for its performance monitoring, the data needed for this type of analysis is already in the platform, making it as easy as flipping a switch to see the capacity and cost analysis reports and recommendations for right-sizing to save money on Trice’s AWS bill.</p>
          <p>“I see a lot of promise with that. There is of course, a myriad of services out there that will do that, but it’s not always easy to justify going solely with a service based on that. It can be a good determining factor with us. We’ve got a lot of the right utilization data in Metricly already, so it makes for a very natural place for it to live,” Kumler says.</p>
          <figure><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/imgs/article-2@2x.png" alt="">
            <figcaption>Green and purple “bands of normalcy” from Metricly’s machine learning</figcaption>
          </figure>
          <p>This graph shows Metricly’s behavior learning and bands of normalcy in Trice’s environment. The green band is based on historic analysis while the purple band is determined based on multivariate regression analysis.</p>
          <h3>The Result</h3>
          <p>Kumler says that Metricly solved Trice Imaging’s problem by providing continuous monitoring as well as several other features. He says that Metricly’s configurable policies and alerts, all of which may be tied to a baseline for the time of day and element is wonderful for generating meaningful alerts. “This is their big win and fundamental differentiator [and is] much easier than trying to accomplish this otherwise,” Kumler says. He adds that many of the alert policies Trice already has in place operate using the baseline bands of normalcy for automated anomaly detection of performance problems.</p>
          <p>Also, Metricly lets him watch when the network is at the lower usage times without hardcoded thresholds that would normally let things slip by, Kumler says. Trice’s traffic varies depending on the time of day.</p>
          <p>In addition, Kumler says he has started to explore some of the AWS utilization and cost reports, which provides calculated utilization metrics. Because Trice already uses Metricly for its performance monitoring, the data needed for this type of analysis is already in the platform, making it as easy as flipping a switch to see the capacity and cost analysis reports and recommendations for right-sizing to save money on Trice’s AWS bill.</p>
          <p>“I see a lot of promise with that. There is of course, a myriad of services out there that will do that, but it’s not always easy to justify going solely with a service based on that. It can be a good determining factor with us. We’ve got a lot of the right utilization data in Metricly already, so it makes for a very natural place for it to live,” Kumler says.</p>
          <figure><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/imgs/article-3@2x.png" alt="">
            <figcaption>Metricly’s AWS cost reports show instance level utilization</figcaption>
          </figure>
          <div class="cu-story_article_social">
            <p>Share story:</p><a href="#"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/icons/facebook@2x.png" alt="facebook"></a><a href="#"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/icons/twitter@2x.png" alt="twitter"></a><a href="#"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-story/icons/linkedin@2x.png" alt="linkedin"></a>
          </div>
        </main>
      </div>
    </div>
    <div class="stories -with-slider">
      <div class="grid-container -thin">
        <h2 class="stories_title">More Stories</h2>
        <div class="stories_subwrap">
          <div class="stories_story -with-review">
            <div class="stories_story_main">
              <div class="stories_story_main_img"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/lines.svg" alt=""></div>
              <h4 class="stories_story_main_title"><b>Joseph T.</b> DevOps Assistant</h4>
              <p class="stories_story_main_summary">It's in the name, Metricly; plethora of metrics available with lots of customization for different dashboards and alerts. It is able to pick up and alert on historical data which is nice, since alerting on set thresholds isn't always helpful. Although we don't use the cost analysis tools often, I can see it pay for the cost of Metricly itself for other customers.</p><a class="stories_story_main_link" href="#">Read Full Review</a>
              <div class="stories_story_review">
                <div class="stories_story_main_img -review-img"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/lines.svg" alt=""></div>
                <p class="stories_story_review_summary">Experience has been great. They put a lot of effort into developing a great and useful product.</p>
                <ul class="stories_story_review_score">
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Easy of Use</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Features & Functionality</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Customer Support</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Value for Money</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                </ul><a class="stories_story_main_link -review-link" href="#">Read Full Review</a>
              </div>
            </div>
          </div>
          <div class="stories_story -with-review">
            <div class="stories_story_main">
              <div class="stories_story_main_img"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/lines.svg" alt=""></div>
              <h4 class="stories_story_main_title"><b>Joseph T.</b> DevOps Assistant</h4>
              <p class="stories_story_main_summary">It's in the name, Metricly; plethora of metrics available with lots of customization for different dashboards and alerts. It is able to pick up and alert on historical data which is nice, since alerting on set thresholds isn't always helpful. Although we don't use the cost analysis tools often, I can see it pay for the cost of Metricly itself for other customers.</p><a class="stories_story_main_link" href="#">Read Full Review</a>
              <div class="stories_story_review">
                <div class="stories_story_main_img -review-img"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/lines.svg" alt=""></div>
                <p class="stories_story_review_summary">Experience has been great. They put a lot of effort into developing a great and useful product.</p>
                <ul class="stories_story_review_score">
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Easy of Use</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Features & Functionality</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Customer Support</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Value for Money</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                </ul><a class="stories_story_main_link -review-link" href="#">Read Full Review</a>
              </div>
            </div>
          </div>
          <div class="stories_story -with-review">
            <div class="stories_story_main">
              <div class="stories_story_main_img"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/lines.svg" alt=""></div>
              <h4 class="stories_story_main_title"><b>Joseph T.</b> DevOps Assistant</h4>
              <p class="stories_story_main_summary">It's in the name, Metricly; plethora of metrics available with lots of customization for different dashboards and alerts. It is able to pick up and alert on historical data which is nice, since alerting on set thresholds isn't always helpful. Although we don't use the cost analysis tools often, I can see it pay for the cost of Metricly itself for other customers.</p><a class="stories_story_main_link" href="#">Read Full Review</a>
              <div class="stories_story_review">
                <div class="stories_story_main_img -review-img"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/lines.svg" alt=""></div>
                <p class="stories_story_review_summary">Experience has been great. They put a lot of effort into developing a great and useful product.</p>
                <ul class="stories_story_review_score">
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Easy of Use</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Features & Functionality</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Customer Support</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                  <li class="stories_story_review_score_item"><span class="stories_story_review_score_item_label">Value for Money</span>
                    <div class="stories_story_review_score_item_stars"><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star -active" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""><img class="stories_story_review_score_item_stars_star" src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/stories/icons/star.svg" alt=""></div>
                  </li>
                </ul><a class="stories_story_main_link -review-link" href="#">Read Full Review</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<div class="start-section">
  <div class="grid-container"><img src="https://s3-us-west-2.amazonaws.com/com-netuitive-app-usw2-public/wp-content/uploads/assets/customer-page/imgs/start.svg" alt="">
    <div class="start-section_subwrap">
      <h2>Start monitoring with Metricly today</h2>
      <p>
         It's in the name, Metricly; plethora of metrics available with lots of customization
        for different dashboards and alerts. It is able to pick up and alert.
      </p><a href="#">Get Started Free</a>
    </div>
  </div>
</div>

<?php get_footer();?>