// Placing order using COD Method
const placeOrder = async (req, res) => {};

// Placing order using Stripe Method
const placeOrderStripe = async (req, res) => {};

// Placing order using Razorpay Method
const placeOrderRazorpay = async (req, res) => {};

// All Order Data for Admin Panel
const allOrders = async (req, res) => {};

// User Order Data for Frontend
const userOrders = async (req, res) => {};

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
