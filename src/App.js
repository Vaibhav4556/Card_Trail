
import Card from "./Card.js";

export default function App() {
  return (
  <section class="pricing py-5">
  <div class="container">
    
      
      <Card subdomain="Free Subdomain" storage="5GB" user="Single User" price="$0" title="Free" /><hr />
      <Card subdomain="Free Subdomain" storage="50GB" user="5 Users" price="$9" title="Plus" /><hr />
      <Card subdomain="Unlimited Free Subdomain" storage="150GB" user="Unlimited Users" price="$49" title="Pro" />
     </div>
    
  
     </section>
  )
}
