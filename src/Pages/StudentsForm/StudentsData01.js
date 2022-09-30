import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function StudentsData01(props) {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        props.studentdata(data)
        props.nextStep()
    }

    useEffect(() => {
        reset({
            name: props.formdata.name,
            father_name: props.formdata.father_name,
            mother_name: props.formdata.mother_name,
            contact_no: props.formdata.contact_no,
        }
        );
    }, [props.formdata])
    return (
        <>
            <section className="content ">
                <div className="container-fluid">
                    <div className="row justify-content-center ">
                        <div className="col-md-10 my-5">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Student Form</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className=" form-group mb-3">
                                            <label htmlFor="exampleInputFile">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="name"
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name?.type === 'required' && <p className='text-danger'>Name  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Father Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="father_name"
                                                {...register("father_name", { required: true })}
                                            />
                                            {errors.father_name?.type === 'required' && <p className='text-danger'>*father name  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Mother Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="mother_name"
                                                {...register("mother_name", { required: true })}
                                            />
                                            {errors.mother_name?.type === 'required' && <p className='text-danger'>mother name  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Contact No</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="contact_no"
                                                {...register("contact_no", { required: true })}
                                            />
                                            {errors.contact_no?.type === 'required' && <p className='text-danger'>contact_no  is required</p>}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Next</button>
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

export default StudentsData01
