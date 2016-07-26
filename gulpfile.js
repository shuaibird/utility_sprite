require('shelljs/global')

const TEMPDIR = 'images'
const OUTPUTDIR = __dirname

var gulp = require('gulp')
var spritesmith = require('gulp.spritesmith')
var minifyCSS = require('gulp-clean-css')

gulp.task('generateSprite', () =>
  gulp.src(`${TEMPDIR}/*.png`)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }))
    .pipe(gulp.dest(TEMPDIR))
)

gulp.task('addIconClass', () =>
  echo('.gizwits-icon{display:inline-block;vertical-align:middle}').toEnd(`${TEMPDIR}/sprite.css`)
)

gulp.task('moveSprite', () =>
  mv(`${TEMPDIR}/sprite.png`, OUTPUTDIR)
)

gulp.task('minifyCSS', () =>
  gulp.src(`${TEMPDIR}/sprite.css`)
    .pipe(minifyCSS())
    .pipe(gulp.dest(OUTPUTDIR))
)

gulp.task('removeUnminifiedCSS', () =>
  rm(`${TEMPDIR}/sprite.css`)
)
