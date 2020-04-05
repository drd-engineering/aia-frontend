import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';
import styles from './Signature.module.css';

export default class Signature extends Component {
    state = { trimmedDataURL: null }
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
    }

    trim = () => {
        this.setState({
            trimmedDataURL: this.sigPad.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }

    render() {

        let { trimmedDataURL } = this.state

        return (
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center"
                spacing={3}
                className={styles.container}>
                <Grid item xs={12} sm={12} className={styles.sigContainer}>
                    <SignaturePad canvasProps={{ className: styles.sigPad }}
                        ref={(ref) => { this.sigPad = ref }} />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Button variant="contained"
                        color="primary"
                        className={styles.buttons}
                        onClick={this.clear}>
                        Clear
                    </Button>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Button variant="contained"
                        color="primary"
                        className={styles.buttons}
                        onClick={this.trim}>
                        Save
                    </Button>

                </Grid>
                <Grid item xs={12} sm={12}>
                    {trimmedDataURL
                        ? <img className={styles.sigImage}
                            src={trimmedDataURL} />
                        : null}
                </Grid>
            </Grid>
        )
    }
}

