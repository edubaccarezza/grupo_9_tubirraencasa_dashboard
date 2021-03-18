import React from 'react'
import Sidebar from './Main/Sidebar/index.js'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <React.Fragment>
	<main>
		<div id="wrapper">
		<Sidebar />

			<div id="content-wrapper" className="d-flex flex-column" >
			<div id="content">

				{/* <!-- Header --> */}
				<Header />
				{/* <!-- End of Header --> */}

				{/* <!-- Begin Page Content --> */}
				<Main />
				{/* <!-- /.container-fluid --> */}

			</div>
			{/* <!-- End of Main Content --> */}

			{/* Footer */}
			<Footer />
			{/* End of Footer */}

    	</div>
      	{/* End of Content Wrapper */}
    	</div>
      	{/* // End of Page Wrapper */}
	</main>
    </React.Fragment>
  );
}
 
export default App;
