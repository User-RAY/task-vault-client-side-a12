

const Faq = () => {
    return (
        <div>

            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">What is this platform about?</div>
            <div className="collapse-content">
                <p>Our platform connects buyers who need tasks completed with workers who can earn by completing these tasks. It&apos;s simple, efficient, and rewarding.</p>
            </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How do I sign up?</div>
            <div className="collapse-content">
                <p>Click on the <q>Register</q> button in the navigation menu. Fill in the required details and choose your role (Worker or Buyer) to get started.</p>
            </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How can I earn money?</div>
            <div className="collapse-content">
                <p>As a Worker, you can complete tasks assigned by Buyers. Once your task is approved, you&apos;ll earn coins that can be converted into real money.</p>
            </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Is there a minimum withdrawal limit?</div>
            <div className="collapse-content">
                <p>Yes, you can withdraw your earnings once you accumulate a minimum of 200 coins, equivalent to $10.</p>
            </div>
            </div>
            
        </div>
    );
};

export default Faq;