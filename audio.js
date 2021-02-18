case '/ytmp3':
                maxbot.reply(from, wait su, id)
    axios.get(https://st4rz.herokuapp.com/api/yta2?url=${body.slice(7)})
                .then(async(res) => {
        await maxbot.sendFileFromUrl(from, res.data.thumb, '', 「 *YOUTUBE MP3* 」\n\nJudul: ${res.data.title}\nExecute: ${res.data.ext}\n\n*_Sabar, Audio Sedang Dikirim_*, id)
        await maxbot.sendFileFromUrl(from, res.data.result, '', '', id)
                          .catch((err) => {
        maxbot.reply(from, URL ${linkmp3} Sudah pernah didownload sebelumnya, Link akan direset selama 30 menit,id)
       })
      })
      .catch(err => {
        maxbot.reply(from, 'error', id)
      })
          break