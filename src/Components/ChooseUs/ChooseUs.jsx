import { CheckCircle, DollarSign, Shield, Clock } from "lucide-react";

const ChooseUs = () => {

    const features = [
        {
          icon: <DollarSign size={40} className="text-green-500" />,
          title: "High Earning Potential",
          description: "Earn more with competitive payouts for every task completed.",
        },
        {
          icon: <Clock size={40} className="text-blue-500" />,
          title: "Fast Payments",
          description: "Receive payments quickly with secure and instant withdrawals.",
        },
        {
          icon: <Shield size={40} className="text-purple-500" />,
          title: "Secure & Trusted",
          description: "Your data and transactions are protected with top security measures.",
        },
        {
          icon: <CheckCircle size={40} className="text-yellow-500" />,
          title: "Low Fees",
          description: "Post tasks at minimal cost and get high-quality results from workers.",
        },
      ];

    return (
        <div>

        <section className="py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center"
                    >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-700">{feature.title}</h3>
                    <p className="text-gray-500 mt-2">{feature.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
            
        </div>
    );
};

export default ChooseUs;