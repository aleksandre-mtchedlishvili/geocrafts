export function Login() {
    return (
        <>
            <div className="d-flex flex-column flex-root" id="kt_app_root">
                {/*begin::Page bg image*/}
                <style dangerouslySetInnerHTML={{ __html: "body { background-image: url('assets/media/auth/bg10.jpeg'); } [data-theme=\"dark\"] body { background-image: url('assets/media/auth/bg10-dark.jpeg'); }" }} />
                {/*end::Page bg image*/}
                {/*begin::Authentication - Sign-in */}
                <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                    {/*begin::Aside*/}
                    <div className="d-flex flex-lg-row-fluid">
                        {/*begin::Content*/}
                        <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
                            {/*begin::Image*/}
                            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="assets/media/auth/agency.png" alt="" />
                            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="assets/media/auth/agency-dark.png" alt="" />
                            {/*end::Image*/}
                            {/*begin::Title*/}
                            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <div className="text-gray-600 fs-base text-center fw-semibold">In this kind of post,
                                <a href="#" className="opacity-75-hover text-primary me-1">the blogger</a>introduces a person they’ve interviewed
                                <br />and provides some background information about
                                <a href="#" className="opacity-75-hover text-primary me-1">the interviewee</a>and their
                                <br />work following this is a transcript of the interview.</div>
                            {/*end::Text*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*begin::Aside*/}
                    {/*begin::Body*/}
                    <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
                        {/*begin::Wrapper*/}
                        <div className="bg-body d-flex flex-center rounded-4 w-md-600px p-10">
                            {/*begin::Content*/}
                            <div className="w-md-400px">
                                {/*begin::Form*/}
                                <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="../../demo1/dist/index.html" action="#">
                                    {/*begin::Heading*/}
                                    <div className="text-center mb-11">
                                        {/*begin::Title*/}
                                        <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                                        {/*end::Title*/}
                                        {/*begin::Subtitle*/}
                                        <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                                        {/*end::Subtitle=*/}
                                    </div>
                                    {/*begin::Heading*/}
                                    {/*begin::Login options*/}
                                    <div className="row g-3 mb-9">
                                        {/*begin::Col*/}
                                        <div className="col-md-6">
                                            {/*begin::Google link=*/}
                                            <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                                <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>
                                            {/*end::Google link=*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6">
                                            {/*begin::Google link=*/}
                                            <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                                <img alt="Logo" src="assets/media/svg/brand-logos/facebook-2.svg" className="theme-light-show h-15px me-3" />Sign in with Facebook</a>
                                            {/*end::Google link=*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Login options*/}
                                    {/*begin::Separator*/}
                                    <div className="separator separator-content my-14">
                                        <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                                    </div>
                                    {/*end::Separator*/}
                                    {/*begin::Input group=*/}
                                    <div className="fv-row mb-8 fv-plugins-icon-container">
                                        {/*begin::Email*/}
                                        <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" />
                                        {/*end::Email*/}
                                        <div className="fv-plugins-message-container invalid-feedback" /></div>
                                    {/*end::Input group=*/}
                                    <div className="fv-row mb-3 fv-plugins-icon-container">
                                        {/*begin::Password*/}
                                        <input type="password" placeholder="Password" name="password" autoComplete="off" className="form-control bg-transparent" />
                                        {/*end::Password*/}
                                        <div className="fv-plugins-message-container invalid-feedback" /></div>
                                    {/*end::Input group=*/}
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                        <div />
                                        {/*begin::Link*/}
                                        <a href="../../demo1/dist/authentication/layouts/overlay/reset-password.html" className="link-primary">Forgot Password ?</a>
                                        {/*end::Link*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                    {/*begin::Submit button*/}
                                    <div className="d-grid mb-10">
                                        <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                                            {/*begin::Indicator label*/}
                                            <span className="indicator-label">Sign In</span>
                                            {/*end::Indicator label*/}
                                            {/*begin::Indicator progress*/}
                                            <span className="indicator-progress">Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                            {/*end::Indicator progress*/}
                                        </button>
                                    </div>
                                    {/*end::Submit button*/}
                                    {/*begin::Sign up*/}
                                    <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                                        <a href="../../demo1/dist/authentication/layouts/overlay/sign-up.html" className="link-primary">Sign up</a></div>
                                    {/*end::Sign up*/}
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Content*/}
                        </div>
                        {/*end::Wrapper*/}
                    </div>
                    {/*end::Body*/}
                </div>
                {/*end::Authentication - Sign-in*/}
            </div>
        </>

    );
}