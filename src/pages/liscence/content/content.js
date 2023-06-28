import React from 'react'

const content = () => {
  return (
    <div class="container mt-4 mb-4">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div class="intro">
                <h1 class="text-center">Your Wonderful Article Title</h1>
                <p class="text-center"><span class="by">by</span><a href="#">Author Name</a><span class="date">Sept 8th, 2016 </span></p>
              </div>
              <div class="text">
                <p>Sed lobortis mi. Suspendisse vel placerat ligula. <span>Vivamus</span> ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac lacus. <strong>Ut vehicula rhoncus</strong> elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit <em>pulvinar dict</em> vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                <h2 className='text-center'>Aliquam In Arcu </h2>
                <p>Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                <figure><img src="beach.jpg" />
                  <figcaption>Caption</figcaption>
                </figure>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default content