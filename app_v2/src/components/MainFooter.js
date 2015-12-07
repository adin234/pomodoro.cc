require('./MainFooter.styl')
import React, {Component, PropTypes} from 'react'

export default class MainFooter extends Component {
  render () {
    return  <footer className="main-footer-wrapper">
              <div>
                <p>
                  Follow us on <a href="https://twitter.com/pomodoro_cc" target="_blank">Twitter</a> for the latest news! Also give us feedback and contact us for feature requests!
                </p>
                <p>
                  by <a href="http://christian.fei.ninja" target="_blank">Christian Fei</a>, hosted on <a href="https://www.digitalocean.com/?refcode=880e8f681b50" target="_blank">digitalocean</a>
                </p>
                <p>
                  For feedback, bug reports or pull requests, please use <a href="https://github.com/christian-fei/pomodoro.cc/" target="_blank">Github</a> or contact us on <a href="https://twitter.com/pomodoro_cc" target="_blank">Twitter</a>
                </p>
                <p>
                  <span style={{verticalAlign: 'text-bottom', paddingRight: '8px'}}>As seen on</span>
                  <a style={{display: "inline-block"}} href="https://www.producthunt.com/tech/pomodoro-cc" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667c1.656 0 3 1.343 3 3s-1.344 3-3 3m0-10H13v20h4v-6h5.667c3.866 0 7-3.134 7-7s-3.134-7-7-7" fill="#FFF"></path></g></svg>
                  </a>
                </p>
                <p>
                  This application is not affiliated, associated or endorsed by the Pomodoro Technique® or Francesco Cirillo.
                </p>
              </div>
            </footer>
  }
}
MainFooter.propTypes = {
}
