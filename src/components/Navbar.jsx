import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar fixed-top navbar-expand-lg bg-warning">
  <div class="container-fluid">
  <a class="navbar-brand"> <font style={{ color: 'red' }} >
              <img src="https://file1.removal.ai/preview/52676000-2a23-4839-8e91-1512a4add8b0_WhatsApp%20Image%202024-07-30%20at%2011.png" alt="" width="40" height="40" />
              ⓊⓈ</font><font style={{ color: 'white' }}>-</font><font style={{ color: 'black' }}>𝓐𝓟𝓟</font>
            </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page"  href="/" style={{color:'white'}}><b>𝒜𝒟𝒟</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="/search"style={{color:'white'}}><b>𝒮𝐸𝒜𝑅𝒞𝐻</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="/view"style={{color:'white'}}><b>𝒱𝐼𝐸𝒲</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar