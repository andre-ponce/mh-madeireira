import { useFormik } from 'formik'
import { isMobile } from 'react-device-detect'

export function ProductRecommendForm({id}) {
  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      message: '',
      friendName: '',
      friendEmail: '',
      productId: id
    },
    onSubmit: (values, helper) => {
      //do some service.SendRecommendation(values);
      helper.resetForm();
    },
  })

  return (
    <>
      <form className="main__form" onSubmit={formik.handleSubmit}>
        <div className="main__left">
          
          <div className="main__left__title">Seus dados</div>
          
          <div className="col-md-12 mb-3">
            <label htmlFor="name">Nome</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              className="form-control" 
              value={formik.values.name} 
              onChange={formik.handleChange} 
            />
          </div>

          <div className="col-md-12 mb-3">
            <label htmlFor="email">E-mail</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="form-control" 
              value={formik.values.email} 
              onChange={formik.handleChange} 
            />
          </div>

          {!isMobile && <div className="col-md-12 mb-3 desk-msg">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              type="text"
              className="form-control"
              required 
              value={formik.values.message} 
              onChange={formik.handleChange} 
            />
          </div>}

        </div>

        <div className="main__right">
          <div className="main__right__title">Dados do seu amigo</div>

          {isMobile && <div className="col-md-12 mb-3 desk-msg">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              type="text"
              className="form-control"
              required 
              value={formik.values.message} 
              onChange={formik.handleChange} 
            />
          </div>}
          
          <div className="col-md-12 mb-3">
            <label htmlFor="friendName">Nome</label>
            <input 
              id="friendName" 
              name="friendName" 
              type="text" 
              required 
              className="form-control" 
              value={formik.values.friendName} 
              onChange={formik.handleChange} 
            />
          </div>

          <div className="col-md-12 mb-3">
            <label htmlFor="friendEmail">E-mail</label>
            <input 
              id="friendEmail" 
              name="friendEmail" 
              type="email" 
              required 
              className="form-control" 
              value={formik.values.friendEmail} 
              onChange={formik.handleChange} 
            />
          </div>

          <div className="col-md-12 mb-3">
            <button type="submit" className="form-submit">Enviar</button>
          </div>
        </div>

      </form>
    </>
  );
}
