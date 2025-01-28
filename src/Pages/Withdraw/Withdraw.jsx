

const Withdraw = () => {
    
    const handleAdd = () => {

    }
    
    return (
        <div>

            <h1 className='text-5xl font-bold text-center'>WithDraw</h1>

            <div className="card bg-base-100 w-4/5 lg:w-3/4 mx-auto">
            <form className="card-body p-0" onSubmit={handleAdd}>
            

            <div className="form-control">
            <label className="label">
                <span className="label-text">Coin To WithDraw</span>
            </label>
            <input type="number" name='name'  className="input input-bordered" required/>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Withdraw_amount</span>
            </label>
            <input type="number" name='img' value={10} readOnly className="input input-bordered" required/>
            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">payment mehoth</span>
            </label>

                <select name="cars" defaultValue={'default'} className="input input-bordered appearance-auto" required>
                    <option value="default" disabled>Please select</option>
                    <option value="bkash">bkash</option>
                    <option value="saab">nogod</option>
                    <option value="mercedes">upay</option>
                </select>

            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">account number</span>
            </label>
            <input type="number" name='name'  className="input input-bordered" required/>
            </div>


            <div className="flex justify-center items-center mt-6">
            <button className="btn btn-primary w-1/2">withdraw</button>
            </div>
            
            </form>
            </div>

            
        </div>
    );
};

export default Withdraw;