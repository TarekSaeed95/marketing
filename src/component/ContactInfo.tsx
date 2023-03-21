function ContactInfo() {
  return (
    <div className="contact-info">
    <div className="container">
      <div className="logo-col">
        <img src="/logo.png" alt="" />
        <p>/contact@branding.com</p>
        <p>/+1 (414) 840 - 3207</p>
      </div>
      <div className="pages">
      <div className="pages-col">
        <ul>
        <li className="head">Pages</li>
          <li>Home</li>
          <li>about</li>
          <li>blog</li>
          <li>blog post</li>
          <li>portfolio</li>
          <li>portfolio single</li>
        </ul>
        <ul>
        <li className="head dummy">Pages</li>
          <li>packages</li>
          <li>packages single</li>
          <li>contact</li>
          <li>team member</li>
        </ul>
      </div>
      <div className="utility-pages">
        <ul>
        <li className="head">utility pages</li>
          <li>start here</li>
          <li>style guide</li>
          <li>404 not found</li>
          <li> password protected</li>
          <li> Licenses</li>
          <li> Changelog</li>
        </ul>
      </div>

      </div>
    </div>
  </div>

  )
}

export default ContactInfo