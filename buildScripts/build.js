import webpack from 'webpack'
import webpackconfig from '../webpack.config.prod'
import chalk from 'chalk'
/*eslint-disable no-console */
process.env.NODE_ENV='production'
webpack(webpackconfig).run((err)=>{
    if(err){
        console.log(chalk.red(err));
        return 1;
    }
    return 0;
})