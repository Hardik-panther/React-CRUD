import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

function StudentsData02(props) {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        props.studentdata(data)
        props.nextStep()

    }

    useEffect(() => {
        reset({
            address: props.formdata.address,
            city: props.formdata.city,
            state: props.formdata.state,
            country: props.formdata.country
        }
        )
    }, [props.formdata])

    return (
        <>
            <section className="content ">
                <div className="container-fluid">
                    <div className="row justify-content-center ">
                        <div className="col-md-10 my-5">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Student Form Step-2</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className=" form-group mb-3">
                                            <label htmlFor="exampleInputFile">Adress</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="address"
                                                {...register("address", { required: true })}
                                            />
                                            {errors.address?.type === 'required' && <p>address  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="city"
                                                {...register("city", { required: true })}
                                            />
                                            {errors.city?.type === 'required' && <p>city  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">State</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="state"
                                                {...register("state", { required: true })}
                                            />
                                            {errors.state?.type === 'required' && <p>state  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="country"
                                                {...register("country", { required: true })}
                                            />
                                            {errors.country?.type === 'required' && <p>country  is required</p>}
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex my-2">

                                        <button type="button" className="btn btn-primary btn mx-2 " onClick={props.previousStep}>Previous</button>

                                        <button type="submit" className="btn btn-primary btn-" >Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div>
            </section>
        </>
    )
}

export default StudentsData02
