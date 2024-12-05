import { createOptimizedPicture } from '../../scripts/aem.js';
import {
  a, button, div, h1, h2, h3, li, p, strong, ul,section,
  domEl
} from '../../scripts/dom-helpers.js';



export default function decorate(block) {
  const section = domEl(section,{id:'leadership-team'
    

    }
  )
  const container = div({class:'container'})
  

  container.appendChild(h2({class:'lowercase-h1 aos-init',}.textContent('leadership team')))

  const headingtext="The Harvest Table leadership team brings decades of combined experience to our partnership.<br>When you work with us, we become an extension of your team, so together we create  <br>inspiring food experiences unique to your college or university."
  container.appendChild(p({class:"harvest-p marg-top-bot-30 centered aos-init"}).textContent(headingtext))
  const cards = div()
  //const rowsdiv=div({class:'row'})
  
  

  /* change to ul, li */
  const rowsdiv = document.createElement('div');
  [...block.children].forEach((row) => {
    const carddiv = div({class:'col-lg-4 col-md-6'})
    while (row.firstElementChild) carddiv.innerHTML=`
        <div class="card" data-toggle="modal" data-target="#leadershipTeam" data-name="Mary Thornton" data-title="Founder &amp; President" data-bio="Mary brings her passion for hospitality and love of food to the elite campuses she serves. With over 30 years of experience in hospitality and service, she has come to appreciate the joy of working with passionate people united by a common goal of delivering an exceptional experience to the guests they serve." data-question="Q: If you could share a meal with anyone, who would it be and why?" data-quote="My father, while no culinarian, was a true food enthusiast. He passed on to me his love of food and wine, and coming together with friends and family over a lengthy meal as the best way to spend an evening." data-img="https://harvesttableculinary.com/wp-content/uploads/2019/11/mary2.jpg">

							<div style="overflow: hidden"><div class="img-wrap">
								<img class="card-img-top  mwlw_zone_box mwlw_helped  mwlw_lazy lazy " src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://harvesttableculinary.com/wp-content/uploads/2019/11/mary.jpg" alt="mary portrait zoomed Image">
								<div class="overlay"></div>	
								</div>					
							</div>
							<div class="card-body">
								<h5 class="card-title">Mary Thornton</h5>
								<p class="card-description">Founder &amp; President</p>
							</div>

						</div>
    `

    rowsdiv.append(carddiv);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  //block.textContent = '';
  //block.append(carddiv);
  block.append(section)

  cards.appendChild(rows)
  container.appendChild(cards)


}
