
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ApiCodeBlock } from "@/components/ui/api-code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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
    <section id="api" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtleText="Developer Resources"
          title="Powerful APIs for seamless integration"
          description="Our RESTful APIs and comprehensive documentation make it easy to integrate investment capabilities into your existing systems and workflows."
        />

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

          <div className="mt-10 text-center">
            <ShimmerButton className="bg-invest-500 hover:bg-invest-600 text-white">
              Explore Complete API Documentation
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
