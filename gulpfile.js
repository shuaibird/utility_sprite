require('shelljs/global')

const TEMPDIR = 'images'
const OUTPUTDIR = __dirname

var gulp = require('gulp')
var spritesmith = require('gulp.spritesmith')
var minifyCSS = require('gulp-clean-css')
var fs = require('fs')

gulp.task('generateSprite', () =>
  gulp.src(`${TEMPDIR}/*.png`)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }))
    .pipe(gulp.dest(TEMPDIR))
)

gulp.task('addIconHover', () => {
  var file = `${TEMPDIR}/sprite.css`
  var stylesheetLines = fs.readFileSync(file).toString().split('\n')
  var regexPattern = /_hover\s{$/

  stylesheetLines.forEach((line, index) => {
    if (regexPattern.test(line)) {
      var className = line.substring(0, line.length - 8)
      var hoverStyle = stylesheetLines[index + 2].trim()

      echo(`${className}.icon-hover:hover,.icon-hover-container:hover ${className}{${hoverStyle}}`).toEnd(file)
    }
  })
})

gulp.task('addIconClass', () =>
  echo('.sprite-icon{display:inline-block;vertical-align:middle}').toEnd(`${TEMPDIR}/sprite.css`)
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
