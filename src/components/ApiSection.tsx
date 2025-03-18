
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ApiCodeBlock } from "@/components/ui/api-code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

const ApiSection = () => {
  const createOrderCode = `// Create a new investment order
const response = await fetch('https://api.cmcinvest.com/v1/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    accountId: 'acc_12345',
    instrumentId: 'AAPL',
    quantity: 0.5, // Fractional shares supported
    orderType: 'MARKET',
    timeInForce: 'GTC'
  })
});

const order = await response.json();
console.log(order);`;

  const portfolioCode = `// Retrieve a customer's portfolio with positions
const response = await fetch(
  'https://api.cmcinvest.com/v1/accounts/acc_12345/portfolio', {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
  }
);

const portfolio = await response.json();

// Portfolio analysis and metrics are included
console.log(portfolio.totalValue);
console.log(portfolio.positions);
console.log(portfolio.performance.ytd);`;

  const webhookCode = `// Example webhook handler for order execution
app.post('/webhooks/order-updates', (req, res) => {
  const signature = req.headers['x-cmcinvest-signature'];
  
  // Verify webhook signature
  if (isValidSignature(signature, req.body, webhookSecret)) {
    const event = req.body;
    
    switch (event.type) {
      case 'order.executed':
        // Update your UI or notify the customer
        updateOrderStatus(event.data.orderId, 'EXECUTED');
        break;
      case 'order.failed':
        // Handle failed orders
        notifyCustomerOfFailure(event.data.orderId);
        break;
    }
    
    res.status(200).send('Webhook received');
  } else {
    res.status(400).send('Invalid signature');
  }
});`;

  return (
    <section id="api" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <p className="text-sm font-medium mb-2 text-invest-500">Driven by technology</p>
          <h2 className="text-5xl md:text-6xl font-bold text-invest-500 mb-6">
            Be part of the future of<br />banking with our API
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            With our cloud-based API, we offer banking infrastructure so financial institutions can 
            focus on providing the best service for their customers and stay relevant in a fast-paced market.
          </p>
          
          <ShimmerButton className="mt-8 bg-white hover:bg-gray-50 text-invest-500 border border-invest-300 rounded-full px-6 flex items-center gap-2">
            Explore our API <ArrowRight className="h-4 w-4" />
          </ShimmerButton>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="orders">Create Orders</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio Management</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="mt-0">
              <ApiCodeBlock code={createOrderCode} language="javascript" title="Create Investment Order" />
            </TabsContent>
            <TabsContent value="portfolio" className="mt-0">
              <ApiCodeBlock code={portfolioCode} language="javascript" title="Portfolio Management" />
            </TabsContent>
            <TabsContent value="webhooks" className="mt-0">
              <ApiCodeBlock code={webhookCode} language="javascript" title="Webhook Integration" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
