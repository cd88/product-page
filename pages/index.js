import Head from "next/head"
import stylesheet from '../styles/main.scss'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"


class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDemoVisible: false,
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",
            paintingIntro: "is-painting"
        }
        this.updateDemoState = this.updateDemoState.bind(this)
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
        this.paintingId = setTimeout(() => {
            this.setState({ paintingIntro: "" })
        }, 750)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
        if (this.paintingId) {
            clearTimeout(this.paintingId)
        }
    }

    updateDemoState(visibilityBoolean) {
        if(this.paintingId !== "is-painting") {
          this.setState({isDemoVisible: visibilityBoolean})
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
      if(this.state.isArticleVisible) {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
      }
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>The Mulchmate - Paulson Industries</title>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                        <script src="https://js.stripe.com/v3/"></script>
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                    <div id="wrapper" onClick={this.handleCloseArticle}>
                        <Header
                            onOpenArticle={this.handleOpenArticle}
                            updateDemoState={this.updateDemoState}
                            paintingIntro={this.state.paintingIntro}
                            timeout={this.state.timeout}
                            isDemoVisible={this.state.isDemoVisible}
                        />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage
