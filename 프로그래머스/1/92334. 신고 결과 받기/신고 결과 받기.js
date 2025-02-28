function solution(id_list, report, k) {
    const reports = new Map()
    const reportedCount = new Map()
    
    id_list.forEach(user => {
        reports.set(user, new Set())
        reportedCount.set(user, 0)
    })
    
    report.forEach(entry => {
        const [reporter, reported] = entry.split(' ')
        
        if (!reports.get(reporter).has(reported)) {
            reports.get(reporter).add(reported)
            reportedCount.set(reported, reportedCount.get(reported) + 1)
        }
    })
    
    const banned = new Set()
    reportedCount.forEach((count, user) => {
        if (count >= k) {
            banned.add(user)
        }
    })
    
    
    return id_list.map(reporter => 
        [...reports.get(reporter)].filter(reported => banned.has(reported)).length
    )
}